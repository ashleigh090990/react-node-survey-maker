// keys - figuring out what env we're in and which keys to use

if (process.env.NODE_ENV === 'production') {
    // we're in prod, use heroku prod keys
	module.exports = require('./prod');
} else {
	// we're not in prod, use uncommitted dev keys
	module.exports = require('./dev');
}