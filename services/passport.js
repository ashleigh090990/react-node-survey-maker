// only want to use Strategy from passport-google-oauth20
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
	// GoogleStrategy has internal identifier 'google'
	// Want to ask for 'profile' and 'email' (see below)
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, userInfo, done) => {


		User.findOne({ googleId: userInfo.id }).then((existingUser) => {
			if (existingUser) {
				// already have User
			} else {
				// this is a new user, so save
		        new User({ googleId: userInfo.id }).save();
			}
		});
	})
);