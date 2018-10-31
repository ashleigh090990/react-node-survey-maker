const express = require('express');
const mongoose = require('mongoose');
// call User schema for mongoose to know to create users collection
require('./models/User');
// calling google auth services using passport
require('./services/passport');

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);