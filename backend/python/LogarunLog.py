import bs4

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
		validDateString = '/'.join(foundDateString[2:])
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
		if isinstance(singleBreak, bs4.element.Tag): return
		if len(singleBreak.split(': ')) != 2: return
		metricName, metricValue = tuple(singleBreak.split(': '))
		if metricName not in _activityDictionaryKeys: return
		if len(metricValue.split(',')) > 1: metricValue = metricValue.split(',')
		self.activityMetrics[metricName] = metricValue

	def handleHTMLParser(self):
		del self.htmlParserForLog
