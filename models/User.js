const mongoose = require('mongoose');
// destructuring below - is equal to saying "const Schema = require(mongoose.Schema);"
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

// telling mongoose want to create new collection called 'users' with the above schema userSchema
mongoose.model('users', userSchema);