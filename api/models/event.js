const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    name: String,
    likes: Number 
});

module.exports = mongoose.model('Event', eventSchema);