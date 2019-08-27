class LogarunUser:

	def __init__(self, logarunUsername, logarunPassword):
		self.username = logarunUsername
		self.password = logarunPassword

	def __rep__(self):
		return self.username

	def __str__(self):
		return self.username