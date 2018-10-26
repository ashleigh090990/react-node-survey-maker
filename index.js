const express = require('express');
const passport = require('passport');
// only want to use Strategy from passport-google-oauth20
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(
	// GoogleStrategy has internal identifier 'google'
	// Want to ask for 'profile' and 'email' (see below)
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackUrl: '/auth/google/callback'
	}, (accessToken) => {
		console.log(accessToken);
	})
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
	    scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT);