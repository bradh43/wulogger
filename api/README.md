# WU Logger Backend
## Sample API Calls
### User
#### Login
#### Create Account
#### Change Password
#### Update Profile

### Team

### Logs

---
## Sample Data
Athlete Sample JSON:
```json
{
	"first_name": "Prat",
	"last_name": "Bishnupuri",
	"team_list": ["wuxc", "GoSTL"],
	"birthdate": "01-01-2000",
	"display_name" : "pipyet",
	"email": "prat@wustl.edu",
	"private": "false",
	"password": "qwerty1ui2op3zxc4vb5nm6a7sd8fgh9j!k0l",
	"profile_picture_url": "https://www.google.com/images?q=profile_pic.png",
	"shoe_list": [
		{
			"name":	"NiKePeGs",
			"distance": 10.01,
			"distance_unit": "mi",
			"mileage_limit": 300,
			"status": "active"
		}
	]
}

```
* `first_name` (String) - First name of athlete
* `last_name` (String) - Last name of athlete
* `team_list` (Array) - Team names that the athlete belongs to
* `birthdate` (String) - birthdate of athlete in IS0186 format MM-DD-YYYY
* `display_name` (String) - displayed name of athlete
* `email` (String) - athlete's email, used as unique ID for logging in
* `private` (Boolean) - makes logs private, defaults to false
* `password` (String) - hashed password of athlete
* `profile_picture_url` (String) - URL to the athlete's profile image
* `shoe_list` (Array) - List of shoes for the athlete
---
Team Sample JSON:
```json
{
	"name":	"wuxc",
	"description": "",
	"owner": "Prat",
	"admin_list": ["Brad", "Zac"],
	"member_list": ["Prat", "Brad", "Zac", "Joe"]
}
```
* `name` (String) - team name, unique team name
* `description` (String) - Description of team
* `owner` (String) - The owner who created the team, can delete team
* `admin_list` (Array) - List of team admins, can manage team
* `member_list` (Array) - List of all athletes on the team
---
Activity Sample JSON:
```json
{
	"type":	"run",
	"duration": "01:06:32.81",
	"distance": 10.01,
	"distance_unit": "mi",
	"shoe":	"NiKePeGs"
}
```
* `activity` (String) - activity type
* `duration` (Float) - time took to complete activity (in seconds)
* `distance` (Float) - distance completed for activity
* `distance_unit` (String) - unit of the activity
* `shoe` (String) - name of shoe if applicable
---
Log Sample JSON:
```json
{
	"title": "Fun run",
	"note":	"Had a neat run",
	"date":	"01-31-2019",
	"author": "Prat",
	"sleep_hr": 8.0,
	"heart_rate": 58,
	"last_updated_timestamp": "2019-08-07T18:21:00.000Z",
	"activity_list": [
		{
			"type":	"swim",
			"duration": "01:06:32.81",
			"distance": 6.3,
			"distance_unit": "km"
		}
	],
	"like_list": ["Joe", "Brad"],
	"comment_list": [
		{
			"comment": "cool bro",
			"timestamp": "2019-07-05T14:48:00.000Z",
			"user":	"Joe"
		}
	]
}
```
* `title` (String) - title of the log
* `note` (String) - note or log for the day
* `date` (String) - date that the log is referencing
* `author` (String) - author of the log, will be their email
* `sleep_hr` (Float) - number of hours slept
* `last_updated_timestamp` (String) - timestamp of the last time the log was updated
* `activity_list` (Array) - list of activities for the current day
* `like_list` (Array) - list of users who have liked that log
* `comment_list` (Array) - list of comments on the current log
---
Shoe Sample JSON:
```json
{
	"name":	"NiKePeGs",
	"distance": 10.01,
	"distance_unit": "mi",
	"mileage_limit": 300,
	"status": "active"
}
```
* `name` (String) - name of the shoe
* `distance` (Float) - total distance run in current pair of shoes
* `distance_unit` (String) - unit of distance being tracked
* `mileage_limit` (Float) - maximum mileage before alerts start
* `status` (String) - current status of the shoes
