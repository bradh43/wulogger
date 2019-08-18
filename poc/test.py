'''

Pretty much just testing calls to the AWS stuff, mostly Dynamo at this point.
Will transfer this to LogarunToWULoggerPipeline when this is done, but want to keep things 'clean' in that folder

'''

import boto3

athlete_info = {
	'first_name': 'Brad',
	'last_name': 'Hodkinson',
	'team_list': ['wuxc', 'EastCoasters'],
	'birthdate': '01-03-2323',
	'display_name': 'climberguy',
	'email': 'brad@wustl.edu',
	'private': False,
	'password': 'lkj3hjllkjk333asdd!k0l',
	'profile_picture_url': 'https://www.google.com/images?q=profile_pic_3.png',
	'shoe_list': [
		{
			'name': 'sOmEsHoE',
			'distance': '999.11',
			'distance_unit': 'mi',
			'mileage_limit': '400',
			'status': 'active'
		}
	]
}

log_info = {
	"title": "Fun run",
	"note": "Had a neat run",
	"date": "01-31-2019",
	"author": "Prat",
	"sleep_hr": "8.0",
	"last_updated_timestamp": "2019-08-07T18:21:00.000Z",
	"activity_list": [
		{
			"type": "swim",
			"duration": "4147.2",
			"distance": "6.3",
			"distance_unit": "km",
		}
	],
	"like_list": ["Joe", "Brad"],
	"comment_list": [
		{
			"comment": "cool bro",
			"timestamp": "2019-07-05T14:48:00.000Z",
			"user": "Joe"
		},
	],
}


class Test:

	def __init__(self):
		self.what = 'what'

	def null_safe_field(self, dictionary, field):
		return dictionary['field'] if field in dictionary.keys() else "None"

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
		return dict(
			type={'S': activity['type']},
			duration={'N': activity['duration']},
			distance={'N': activity['distance']},
			distance_unit={'S': activity['distance_unit']},
			shoe={'S': self.null_safe_field(activity, 'shoe')}
		)

	def get_comment(self, comment):
		return dict(
			comment={'S': comment['comment']},
			timestamp={'S': comment['timestamp']},
			user={'S': comment['user']}
		)

	def put_new_log(self, input_data):
		postItem = dict(
			title={'S': input_data['title']},
			note={'S': input_data['note']},
			date={'S': input_data['date']},
			author={'S': input_data['author']},
			sleep_hr={'N': input_data['sleep_hr']},
			last_updated_timestamp={'S': input_data['last_updated_timestamp']},
			activity_list={'L': [{'M': self.get_activity(activity)} for activity in input_data['activity_list']]},
			like_list={'SS': input_data['like_list']},
			comment_list={'L': [{'M': self.get_comment(comment)} for comment in input_data['comment_list']]}
		)

		client = boto3.client('dynamodb')

		response = client.put_item(
			TableName='Logs',
			Item=postItem,
			ReturnValues='ALL_OLD',
			ReturnConsumedCapacity='NONE'
		)


if __name__ == '__main__':
	hold = test()
	test.put_new_athlete(athlete_info)
	test.put_new_log(log_info)
