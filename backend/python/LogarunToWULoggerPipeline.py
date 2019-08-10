'''

NOTE: This file is not really going to be run here, but will end up being transferred to AWS Lambda at some point.

Not sure if this will be a one time thing or something that we port over into the new website. We could easily have
this be something that simply backfills at the very beginning, but it would also be cool to have people "log in" with
their LogARun accounts and basically mirror everything that is done to have the information constantly updated on
WULogger.

Regardless, this is going to be in Python. Easy enough to run everything through this, and it's simply one POST request
to log in to LogARun, then a GET request to pull the correct week.

'''

class LogarunToWULoggerPipeline():

	def __init__(self):
		self.name = 'Test Thing'

if __name__ == '__main__':
	print("Main Not Implemented")