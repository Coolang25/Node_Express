const mongoose = require('mongoose')

// shape of the document
const kittySchema = new mongoose.Schema({
    name: String
});

// model
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten