const express = require('express');
const app = express();

// calling google auth services using passport
require('./services/passport');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);