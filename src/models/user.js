const mongoose = require('mongoose')

// shape of the document
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String
});

// model
const User = mongoose.model('user', userSchema);

module.exports = User