// only want to use Strategy from passport-google-oauth20
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
        done(null, user);
	})
});

passport.use(
	// GoogleStrategy has internal identifier 'google'
	// Want to ask for 'profile' and 'email' (see below)
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	}, (accessToken, refreshToken, userInfo, done) => {


		User.findOne({ googleId: userInfo.id }).then(existingUser => {
			if (existingUser) {
				// already have User
				done(null, existingUser);
			} else {
				// this is a new user, so save
		        new User({ googleId: userInfo.id }).save().then(user => {
		        	done(null, user)
		        });
			}
		});
	})
);