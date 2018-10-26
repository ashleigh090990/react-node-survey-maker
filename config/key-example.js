module.exports = {
	// this will be public anyway, but will be a string of random letters and numbers followed by '.apps.googleusercontent.com'
	googleClientID: 'XXXXXXXXXXXXXXXX.apps.googleusercontent.com',
	// this will be private and should therefore be kept secret! It will be a string of random letters and numbers
	googleClientSecret: 'XXXXXXXXXXXXXXXX',
	// this will be provided on the dashboard of the mongodb database you've set up
	// you'd need to replace the <dbuser> with your database user's name
	// and you'd need to replace <dbpassword> with the database user's password
	// it should vaguely look like this:
	mongoURI: 'mongodb://USER_NAME:USER_PASSWORD@XXXXXXXXXX.mlab.com:00000/XXXXXXXXXXXX'
}