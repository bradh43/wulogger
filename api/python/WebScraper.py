from requests import Session
from datetime import date, datetime, timedelta
from bs4 import BeautifulSoup
from backend.python.LogarunLog import LogarunLog
from time import time
import json
import numpy as np
import pandas as pd

class WebScraper:
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

	def runScrapingService(self, teamIdToSearch = 1285):
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
		weeklyLogDivs = htmlParser.find_all('td', {'class':'monthDay'})
		for individualLogDiv in weeklyLogDivs:
			dailyLogToParse = LogarunLog(individualLogDiv)
			if not dailyLogToParse.isValidLog(): continue
			dailyLogToParse.handleHTMLParser()
			print(f'Scraped {dailyLogToParse}')
			self.logarunData.append(dailyLogToParse.__dict__)

