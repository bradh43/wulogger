# WU Logger Backend
## Sample API Calls
### User
#### Login
#### Create Account
#### Change Password
#### Update Profile

### Team

### Logs

===
## Sample Data
Athlete Sample JSON:
```json
{
	"first":	"Prat",
	"lastname":	"Bishnupuri",
	"team":		"wuxc",
	"birthdate":	"01-01-2000",
	"username":	"pipyet",
	"password":	"qwerty1ui2op3zxc4vb5nm6a7sd8fgh9j!k0l"
	"profile_url":	"https://www.google.com/images?q=dog.png"
}

```
* `first` (String) - First name of athlete
* `Last` (String) - Last name of athlete
* `team` (String) - Team name that the athlete belongs to
* `birthdate` () - birthdate of athlete
* `username` (String) - username of athlete, used as unique id
* `password` (String) - hashed password of athlete
* `profile_url` (String) - URL to the athlete's profile image
---
Team Sample JSON:
```json
{
	"team":	"wuxc"
}
```
* `team` (String) - team name
---
Activity Sample JSON:
```json
{
	"activity":	"run",
	"duration":	"01:06:32.81",
	"distance":	10.01,
	"shoe":		"NiKePeGs"
	
}
```
`activity` (String) - activity type
`duration` () - time took to complete activity
`distance` (float) - distance completed for activity
`shoe` (String) - name of shoe if applicable

