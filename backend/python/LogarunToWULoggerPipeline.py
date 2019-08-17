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

class LogarunToWULoggerPipeline():

	def __init__(self, userData):
		self.name = 'Test Thing'
		self.searchURL = 'http://www.logarun.com/logon.aspx'
		self.userData = userData
		self.loginFormData = self.createLoginFormData()
		print(self.userData)

	def createLoginFormData(self):
		return {
			'__VIEWSTATE': '/wEPDwULLTE5NTUyNzc3NDhkZC7w9zeYDbAWpWTaWlQFzEFw15ln',
			'__VIEWSTATEGENERATOR': '5A2128B1',
			'SubmitLogon': 'true',
			'LoginName': self.userData['userName'],
			'Password': self.userData['password'],
			'LoginNow': 'Login'
		}

	def getLoginCredentialsStatus(self):
		testSession = Session()
		sessionResponseData = testSession.post(self.searchURL, data=self.loginFormData)
		return sessionResponseData.status_code

if __name__ == '__main__':
	print("Main Not Implemented")