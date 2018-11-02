const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
// call User schema for mongoose to know to create users collection
require('./models/User');
// calling google auth services using passport
require('./services/passport');

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);

const app = express();

// authentication of user by setting cookie
app.use(
	cookieSession({
		// 30 days in in m/s
		maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);