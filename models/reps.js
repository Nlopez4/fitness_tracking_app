// data for reps

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repSchema = new mongoose.Schema({
    reps: {type: Number, min: 1, max: 100, required: true}
 }); 

 const findReps = module.exports = mongoose.model('reps', repSchema);


 // display 
 findReps.
    find().
    limit(100).
    select('reps'); 