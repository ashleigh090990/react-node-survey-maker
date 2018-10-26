// only want to use Strategy from passport-google-oauth20
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
	// GoogleStrategy has internal identifier 'google'
	// Want to ask for 'profile' and 'email' (see below)
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, userInfo, done) => {
		console.log('hello', accessToken, refreshToken, userInfo, done);
	})
);