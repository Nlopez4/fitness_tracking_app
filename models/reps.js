// data for reps

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repSchema = new mongoose.Schema({
    reps: {type: Number, min: 1, max: 100, required: true}
 }); 

 module.exports = mongoose.model('reps', repsSchema);