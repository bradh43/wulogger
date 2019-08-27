import numpy as np
import pandas as pd
import json
from time import time
from datetime import datetime
from datetime import time as dtTime

pd.set_option('display.width', 1000)
pd.set_option('display.max_columns', 20)

WEEKS_BACK = 250
DATE_SAVED = '06_22_2019'

OVERALL_START_TIME = time()
COMP_FILENAME = f'rawJSON/compressed_{WEEKS_BACK}_weeks_{DATE_SAVED}.npz'
PANDAS_FILENAME = f'~/PycharmProjects/LogARunRedux/pandas/pandas_{WEEKS_BACK}_weeks_{DATE_SAVED}.pkl'
# PANDAS_FILENAME = f'/Users/zac/PycharmProjects/LogARunRedux/pandas/pandas_25_weeks_06_19_2019.pkl'

def formatLogText(logText):
	return str(logText).strip().replace('\r',' ').replace('\n',' ').replace('\b',' ')

def handleDistance(activityData):
	if type(activityData) == list:
		activityData[-1] = activityData[-1].split('(')[0][1:]
		return [parseDistanceList(timeDataPoint) for timeDataPoint in activityData]
	return [parseDistanceList(activityData.split('(')[0])]

def parseDistanceList(activityData):
	return convertDistances(*tuple(activityData.split()))

def convertDistances(distance, distanceMetric):
	distanceConversions = {'mile': 1, 'km': .623, 'm': .000623, 'yd': 0.000568}
	validDistance = float(distance) * distanceConversions[distanceMetric]
	return validDistance

def handleTime(activityData):
	if type(activityData) == list:
		activityData[-1] = activityData[-1].split('(')[0][1:]
		return [parseTimeList(timeDataPoint) for timeDataPoint in activityData]
	return [parseTimeList(activityData.split('(')[0])]

def parseTimeList(activityData):
	hours, minutes, seconds = [int(number) for number in activityData.split(':')]
	activityTime = dtTime(hours, minutes, seconds)
	return activityTime

def editDataFrame(inputDataFrame):
	def delegateTimeSeries(attributeName):
		inputDataFrame[attributeName] = inputDataFrame[attributeName].apply(lambda x: handleTime(x) if x != None else [])

	def delegateDistanceSeries(attributeName):
		inputDataFrame[attributeName] = inputDataFrame[attributeName].apply(lambda x: handleDistance(x) if x != None else [])

	for logAttribute in ['Aqua Jog', 'Bike', 'Elliptical', r'Exercise Bike', 'Run', 'Spinning', 'Swim']:
		delegateDistanceSeries(logAttribute)
		delegateTimeSeries(f'{logAttribute} Time')

	inputDataFrame['logDate'] = inputDataFrame['logDate'].apply(lambda x: datetime.strptime(x, '%Y/%m/%d'))
	inputDataFrame['logText'] = inputDataFrame['logText'].apply(lambda x: formatLogText(x) if x != None else '')
	inputDataFrame['title'] = inputDataFrame['title'].apply(lambda x: str(x) if x != None else '')
	inputDataFrame['username'] = inputDataFrame['username'].apply(lambda x: str(x) if x != None else '')
	return inputDataFrame

def loadRawJSONData():
	# DON'T USE THIS CODE, UNLESS YOU WANT THE RAW DATA TO USE AND MESS WITH

	print("Loading Compressed Logs")
	startTime = time()
	try:
		with np.load(COMP_FILENAME) as compressedLogs:
			print(f'Took {time() - startTime} seconds.\n')
			print("Uncompressing Logs")
			startTime = time()
			uncompressedLogs = compressedLogs['arr_0']
			print(f'Took {time() - startTime} seconds.\n')

		print("Converting To JSON")
		startTime = time()
		logsAsDictionaries = [json.loads(log) for log in uncompressedLogs]
		print(f'Took {time() - startTime} seconds.\n')

		return logsAsDictionaries

	except:
		print(f'Filename not found: {COMP_FILENAME}')
		return FileNotFoundError

def loadPandasData():
	print("Setting Up Pandas DataFrame")
	startTime = time()
	try:
		print(PANDAS_FILENAME)
		logDataFrame = pd.read_pickle(PANDAS_FILENAME)
		print(logDataFrame.shape)
		logDataFrame = editDataFrame(logDataFrame)
		print('here')
		print(f'Took {time() - startTime} seconds.\n')
		print(f'Total Loading Time: {time() - OVERALL_START_TIME}')
		print("\nData Now Ready, In Several Forms:\n  Pandas DataFrame - logDataFrame\n  As Dictionaries - logsAsDictionaries")
		return logDataFrame

	except:
		print(f'Filename not found: {PANDAS_FILENAME}')
		return FileNotFoundError


# ALL OF YOUR CODE BELOW HERE

if __name__ == '__main__':
	logDataFrame = loadPandasData()
	print(logDataFrame.shape)
	# runs = logDataFrame[logDataFrame.apply(lambda x: x['Run'] != None, axis=1)]
	#
	# if 'Spinning' not in logDataFrame.columns: logDataFrame['Spinning'] = None # Needed for legacy files, wasn't included then
	# logDataFrame = editDataFrame(logDataFrame)
	# multiRuns = logDataFrame[logDataFrame.apply(lambda x: len(x['Run']) > 1, axis=1)]
	# print(logDataFrame[:1])
