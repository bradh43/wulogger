import unittest
from unittest.mock import MagicMock, Mock
from backend.python.LogarunToWULoggerPipeline import LogarunToWULoggerPipeline

class LogarunToWULoggerPipelineTest(unittest.TestCase):

	@classmethod
	def setUpClass(cls) -> None:
		cls.mockUser = {
			'userName': 'notarobot',
			'password': 'NotARobot'
		}
		cls.testInstance = LogarunToWULoggerPipeline(cls.mockUser)
		print(cls.testInstance)
		cls.expectedFormData = {
			'__VIEWSTATE': '/wEPDwULLTE5NTUyNzc3NDhkZC7w9zeYDbAWpWTaWlQFzEFw15ln',
			'__VIEWSTATEGENERATOR': '5A2128B1',
			'SubmitLogon': 'true',
			'LoginName': 'notarobot',
			'Password': 'NotARobot',
			'LoginNow': 'Login'
		}
		cls.testInstance.getLoginCredentialsStatus = MagicMock(return_value=200)

	def test_initialization(self):
		self.assertIsNotNone(self.testInstance)

	def test_can_get_login_form_data(self):
		print(self.testInstance)
		form_data = self.testInstance.createLoginFormData()
		self.assertEquals(self.expectedFormData, form_data)

	# def test_makes_call_to_logarun(self):
	# 	credentialStatus = self.testInstance.getLoginCredentialsStatus()
	# 	self.testInstance.getLoginCredentialsStatus.assert_called_with('asdf')

if __name__ == '__main__':
	unittest.main()
