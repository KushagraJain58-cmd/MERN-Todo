const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		pass: { type: String, required: true },
		quote: { type: String }
	},
	{
		collection: 'user-data'
	}
);

const User = mongoose.model('UserData', UserSchema);
module.exports = User;
