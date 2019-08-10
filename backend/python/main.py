from WebScraper import WebScraper
from datetime import datetime
import numpy as np
import pandas as pd
import json
import sys

sys.setrecursionlimit(100000)

CURRENT_DATE = datetime.today()
WEEKS_TO_GO_BACK = 30

print("Setting Up WebScraper\n")
logarunWebScraper = WebScraper('http://www.logarun.com/logon.aspx', CURRENT_DATE, WEEKS_TO_GO_BACK)
logarunWebScraper.runScrapingService()

print('Editing Logs For Compression\n')
JSONArrayOfLogs = [json.dumps(log) for log in logarunWebScraper.logarunData]
numpyVersionOfArray = np.array(JSONArrayOfLogs)
JSONArrayOfLogs = None
outputFileName = f'../rawJSON/compressed_{WEEKS_TO_GO_BACK}_weeks_{datetime.strftime(CURRENT_DATE,"%m_%d_%Y")}'

print(f'Saving File To {outputFileName}\n')
np.savez_compressed(outputFileName, numpyVersionOfArray)

print('Editing Logs for Pandas DataFrame')
pandasPrepared = [json.loads(log) for log in numpyVersionOfArray]
numpyVersionOfArray = None

df = pd.DataFrame(pandasPrepared)
pandasPrepared = None
pandasDataFrame = pd.concat([df.drop('activityMetrics', axis=1), pd.DataFrame(df['activityMetrics'].tolist())], axis=1)

pandasFileName = f'../pandas/pandas_{WEEKS_TO_GO_BACK}_weeks_{datetime.strftime(CURRENT_DATE,"%m_%d_%Y")}'
print(f'Saving DataFrame to {pandasFileName}')
pandasDataFrame.to_pickle(f'{pandasFileName}.pkl')
pandasDataFrame = None

print('Files Saved Safely!')