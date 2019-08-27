'''

NOTE: This file is not really going to be run here, but will end up being transferred to AWS Lambda at some point.

Not sure if this will be a one time thing or something that we port over into the new website. We could easily have
this be something that simply backfills at the very beginning, but it would also be cool to have people "log in" with
their LogARun accounts and basically mirror everything that is done to have the information constantly updated on
WULogger.

Regardless, this is going to be in Python. Easy enough to run everything through this, and it's simply one POST request
to log in to LogARun, then a GET request to pull the correct week.

'''

from requests import Session
from datetime import datetime, timedelta
from time import time
from bs4 import element, BeautifulSoup
import boto3

class WebScraper():

	def __init__(self, searchURL, currentDate, numberWeeksToSearch):
		self.searchURL = searchURL
		self.currentDate = currentDate
		self.loginFormData = self.createLoginFormData()
		self.startDate = self.setStartDate(currentDate, numberWeeksToSearch)
		self.numberWeeksToSearch = numberWeeksToSearch
		self.logarunData = []

	def __str__(self):
		return self.searchURL

	def createLoginFormData(self):
		return {
			'__VIEWSTATE': '/wEPDwULLTE5NTUyNzc3NDhkZC7w9zeYDbAWpWTaWlQFzEFw15ln',
			'__VIEWSTATEGENERATOR': '5A2128B1',
			'SubmitLogon': 'true',
			'LoginName': 'notarobot',
			'Password': 'NotARobot',
			'LoginNow': 'Login'
		}

	def getLoginCredentialsStatus(self):
		testSession = Session()
		sessionResponseData = testSession.post(self.searchURL, data=self.loginFormData)
		return sessionResponseData.status_code

	def setStartDate(self, currentDate, numberWeeksToSearch):
		weeksToGoBack = timedelta(weeks=numberWeeksToSearch)
		return currentDate - weeksToGoBack

	def runScrapingService(self, teamIdToSearch=1285):
		with Session() as currentScrapingSession:
			self.loginToLogarun(currentScrapingSession)
			for weekNumber in range(0, self.numberWeeksToSearch + 1):
				startingTime = time()
				print(f'\nScraping for Week {weekNumber}\n')
				weekStringToSearch = self.getWeekStringToSearch(weekNumber)
				currentSearchURL = f'http://www.logarun.com/TeamCalendar.aspx?teamid={teamIdToSearch}&date={weekStringToSearch}'
				getRequestResponse = currentScrapingSession.get(currentSearchURL)
				self.scrapeWeekDetails(getRequestResponse)
				print(f'\nScraping took {time() - startingTime} seconds!\n')

	def loginToLogarun(self, currentScrapingSession):
		currentScrapingSession.post(self.searchURL, data=self.loginFormData)

	def getWeekStringToSearch(self, weekNumber):
		addOneWeekComponent = timedelta(weeks=weekNumber)
		weekDateObjectToSearch = self.startDate + addOneWeekComponent
		return weekDateObjectToSearch.strftime('%m-%d-%y')

	def scrapeWeekDetails(self, weekDetailsInHTML):
		htmlParser = BeautifulSoup(weekDetailsInHTML.text, 'html.parser')
		weeklyLogDivs = htmlParser.find_all('td', {'class': 'monthDay'})
		for individualLogDiv in weeklyLogDivs:
			dailyLogToParse = LogarunLog(individualLogDiv)
			if not dailyLogToParse.isValidLog(): continue
			dailyLogToParse.handleHTMLParser()
			print(f'Scraped {dailyLogToParse}')
			self.logarunData.append(dailyLogToParse.__dict__)

_activityDictionaryKeys = ['Run', 'Run Time', 'Run Shoe',
						   'Bike', 'Bike Time',
						   'Exercise Bike', 'Exercise Bike Time',
						   'Elliptical', 'Elliptical Time',
						   'Swim', 'Swim Time', 'Aqua Jog', 'Aqua Jog Time',
						   'Spinning', 'Spinning Time', 'Sleep Hours']

class LogarunLog:

	def __init__(self, htmlParserForLog):
		self.htmlParserForLog = htmlParserForLog
		if self.isValidLog():
			self.initializeMetrics()

	def __repr__(self):
		print(self.__dict__)
		return f'Log from {self.logDate} by {self.username}'

	def __str__(self):
		return f'Log from {self.logDate} by {self.username}'

	def __eq__(self, other):
		sameName = self.username == other.username
		sameLog = self.logText == other.logText
		sameDate = self.logDate == other.logDate
		return sameName and sameLog and sameDate

	def initializeMetrics(self):
		self.username = self.getUsername()
		self.logDate = self.getLogDate()
		self.title = self.getTitle()
		self.comments = self.getCommentList()
		self.logText = self.getLogText()
		self.activityMetrics = self.setUpActivityMetrics()
		self.getActivityMetrics()

	def isValidLog(self):
		return len(self.htmlParserForLog.find_all('p')) != 0

	def getUsername(self):
		usernameCalendarString = self.parseATag()
		foundUsername = usernameCalendarString.split('/')[1]
		return foundUsername

	def getLogDate(self):
		dateCalendarString = self.parseATag()
		foundDateString = dateCalendarString.split('/')
		validDateString = '-'.join([foundDateString[3], foundDateString[4], foundDateString[2]])
		return validDateString

	def parseATag(self):
		informationDiv = self.htmlParserForLog.find('a', {'class':'dayNum'})
		return informationDiv['href']

	def getTitle(self):
		titleDiv = self.htmlParserForLog.find('span',{'class':'dayTitle'})
		titleText = titleDiv.text if titleDiv else None
		return titleText

	def getCommentList(self):
		commentDiv = self.htmlParserForLog.find('i', {'class':'comments'})
		if not commentDiv: return []
		listOfStrongElements = self.htmlParserForLog.find_all('strong')
		listOfCommentsExcludingNote = listOfStrongElements[1:]
		validCommentList = self.parseComments(listOfCommentsExcludingNote)
		return validCommentList

	def getExpectedNumberOfComments(self, commentDiv):
		return int(commentDiv.text.split(': ')[1])

	def parseComments(self, potentialComments):
		listOfComments = []
		for comment in potentialComments:
			commentData = {}
			commentData['commenter'] = comment.text[1:-1]
			commentData['commentText'] = comment.next_sibling
			listOfComments.append(commentData)
		return listOfComments

	def getLogText(self):
		logTextStartingPoint = self.htmlParserForLog.find(string='Note')
		if logTextStartingPoint == None: return None
		logTextStartingTag = logTextStartingPoint.parent
		logText = logTextStartingTag.next_sibling[2:]
		return logText

	def setUpActivityMetrics(self):
		activityDictionary = {}
		for key in _activityDictionaryKeys:
			activityDictionary[key] = None
		return activityDictionary

	def getActivityMetrics(self):
		metricsDiv = (self.htmlParserForLog.find('p'))
		if metricsDiv == None: return
		allBreaks = metricsDiv.find_all('br')
		for singleBreak in allBreaks:
			self.handleSingleBreak(singleBreak.previous_sibling)

	def handleSingleBreak(self, singleBreak):
		if isinstance(singleBreak, element.Tag): return
		if len(singleBreak.split(': ')) != 2: return
		metricName, metricValue = tuple(singleBreak.split(': '))
		if metricName not in _activityDictionaryKeys: return
		if len(metricValue.split(',')) > 1: metricValue = metricValue.split(',')
		self.activityMetrics[metricName] = metricValue

	def handleHTMLParser(self):
		del self.htmlParserForLog

class LogarnToWULoggerPipeline:

	def __init__(self, log_entry):
		self.log_entry = self.transform_data(log_entry)

	def transform_data(self, log_entry):

		sleep = self.null_safe_field(log_entry, 'Sleep Hours')

		log_info = {
			"title": log_entry['title'] if log_entry['title'] else None,
			"note": self.null_safe_field(log_entry, 'logText'),
			"date": self.null_safe_field(log_entry, 'logDate'),
			"author": self.null_safe_field(log_entry, 'username'),
			"sleep_hr": sleep if sleep is not 'None' else '0',
			"last_updated_timestamp": None,
			"activity_list": self.parse_activities(log_entry['activityMetrics']),
			"like_list": [],
			"comment_list": self.parse_comments(log_entry)
		}
		return log_info

	def parse_comments(self, log_entry):
		return [{'comment': comment['commentText'], 'user': comment['commenter']} for comment in log_entry['comments']]

	def parse_activities(self, metrics):
		activity_list = []
		activity_types = ['Run', 'Bike', 'Exercise Bike', 'Elliptical', 'Swim', 'Aqua Jog', 'Spinning']

		for activity_type in activity_types:
			act_base = [metrics[activity_type]] if type(metrics[activity_type]) != list else metrics[activity_type]
			act_time = [metrics[f'{activity_type} Time']] if type(metrics[f'{activity_type} Time']) != list else metrics[f'{activity_type} Time']
			act_base = [a for a in act_base if a is not None]
			act_time = [a for a in act_time if a is not None]
			if not act_base and not act_time: continue
			if len(act_base) >= len(act_time):
				for index, entry in enumerate(act_base):
					current_activity = {
						'type': activity_type,
						'duration': self.parse_time(act_time[index]) if index < len(act_time) else None,
						'distance': entry.split()[0],
						'distance_unit': entry.split()[1].split('(')[0]
					}
			else:
				for index, entry in enumerate(act_time):
					current_activity = {
						'type': activity_type,
						'duration': self.parse_time(entry),
						'distance': act_base[index].split()[0] if index < len(act_base) else None,
						'distance_unit': act_base[index].split()[1].split('(')[0] if index < len(act_base) else None,
					}
			activity_list.append(current_activity)

		return activity_list

	def parse_time(self, time):
		time = time.split('(')[0]
		hours, mins, secs = [int(x) for x in time.split(':')]
		return str(3600 * hours + 60 * mins + secs)


	def null_safe_field(self, dictionary, field):
		return dictionary[field] if field in dictionary.keys() else None

	def get_shoe_info(self, shoe):
		return dict(name={'S': shoe['name']},
		            distance={'N': shoe['distance']},
		            distace_unit={'S': shoe['distance_unit']},
		            mileage_limit={'N': shoe['mileage_limit']},
		            status={'S': shoe['status']})

	def put_new_athlete(self, input_data):
		firstName = {'S': input_data['first_name']}
		lastName = {'S': input_data['last_name']}
		teamList = {'SS': input_data['team_list']}
		birthdate = {'S': input_data['birthdate']}
		displayName = {'S': input_data['display_name']}
		email = {'S': input_data['email']}
		private = {'BOOL': input_data['private']}
		password = {'S': input_data['password']}
		profilePictureUrl = {'S': input_data['profile_picture_url']}
		shoeList = {'L': [{'M': self.get_shoe_info(shoe)} for shoe in input_data['shoe_list']]}

		postItem = dict(first_name=firstName,
		                last_name=lastName,
		                team_list=teamList,
		                birthdate=birthdate,
		                display_name=displayName,
		                email=email,
		                private=private,
		                password=password,
		                profile_picture_url=profilePictureUrl,
		                shoe_list=shoeList)

		client = boto3.client('dynamodb')

		response = client.put_item(
			TableName='Athletes',
			Item=postItem,
			ReturnValues='ALL_OLD',
			ReturnConsumedCapacity='NONE'
		)

		return response

	def get_activity(self, activity):
		act_dict = {}
		if self.null_safe_field(activity, 'type'): act_dict.update(type={'S': activity['type']})
		if self.null_safe_field(activity, 'duration'): act_dict.update(duration={'N': activity['duration']})
		if self.null_safe_field(activity, 'distance'): act_dict.update(distance={'N': activity['distance']})
		if self.null_safe_field(activity, 'distance_unit'): act_dict.update(distance_unit={'S': activity['distance_unit']})
		if self.null_safe_field(activity, 'shoe'): act_dict.upate(shoe={'S': activity['shoe']})

		return act_dict

	def get_comment(self, comment):
		comment_dict = dict(
			comment={'S': comment['comment']},
			user={'S': comment['user']}
		)
		if self.null_safe_field(comment, 'timestamp'): comment_dict.update(timestamp={'S': comment['timestamp']});
		return comment_dict

	def put_new_log(self):
		input_data = self.log_entry
		post_item = dict()
		if self.null_safe_field(input_data, 'title'): post_item.update(title={'S': input_data['title']})
		if self.null_safe_field(input_data, 'note'): post_item.update(note={'S': input_data['note']})
		if self.null_safe_field(input_data, 'date'): post_item.update(date={'S': input_data['date']})
		if self.null_safe_field(input_data, 'author'): post_item.update(author={'S': input_data['author']})
		if self.null_safe_field(input_data, 'sleep_hr'): post_item.update(sleep_hr={'N': input_data['sleep_hr']})
		if self.null_safe_field(input_data, 'last_updated_timestamp'): post_item.update(last_updated_timestamp={'S': input_data['last_updated_timestamp']})
		if input_data['activity_list']: post_item.update(activity_list={'L': [{'M': self.get_activity(activity)} for activity in input_data['activity_list']]})
		if self.null_safe_field(input_data, 'like_list'): post_item.update(like_list={'SS': input_data['like_list']})
		if input_data['comment_list']: post_item.update(comment_list={'L': [{'M': self.get_comment(comment)} for comment in input_data['comment_list']]})

		print(f'Submitting log for {input_data["author"]} on {input_data["date"]}')
		client = boto3.client('dynamodb')

		response = client.put_item(
			TableName='Logs',
			Item=post_item,
			ReturnValues='ALL_OLD',
			ReturnConsumedCapacity='NONE'
		)

if __name__ == '__main__':
	CURRENT_DATE = datetime.today()
	WEEKS_TO_GO_BACK = 0

	print("Setting Up WebScraper\n")
	logarunWebScraper = WebScraper('http://www.logarun.com/logon.aspx', CURRENT_DATE, WEEKS_TO_GO_BACK)
	logarunWebScraper.runScrapingService()

	for log in logarunWebScraper.logarunData:
		dynamoPipeline = LogarnToWULoggerPipeline(log)
		dynamoPipeline.put_new_log()

