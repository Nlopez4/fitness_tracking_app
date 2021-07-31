// data for duration 

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const durSchema = new mongoose.Schema({
    duration: {type: Number, min: 1, max: 60, required: true}
});

const findDuration = module.exports = mongoose.model('duration', durSchema);