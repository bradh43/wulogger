import unittest
from backend.python.LogarunToWULoggerPipeline import LogarunToWULoggerPipeline

class LogarunToWULoggerPipelineTest(unittest.TestCase):

	def test_initialization(self):
		testInstance = LogarunToWULoggerPipeline()
		self.assertIsNotNone(testInstance)


if __name__ == '__main__':
	unittest.main()
