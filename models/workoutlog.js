// data for exercise, duration, and reps

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerSchema = new mongoose.Schema({
    type: String,
    enum: ['Pushup', 'Pull Ups', 'Chin Ups', 'Barbell Squats', 'Air Squats', 'Bulgarian Split Squat', 'Goblet Squat','Dumbbell Squat', 'Wall Sits', 'Conventional Deadlift', 'Sumo Deadlift', 'Kettle Bells', 'Outdoor Walk', 'Indoor Walk', 'Outdoor Run', 'Treadmill', 'Row', 'Bicycle', 'Bench Press', 'Dips', 'Dumbbell Press', 'Dips']
});

const durSchema = new mongoose.Schema({
    type: Number, 
    min: 1, 
    max: 60,
});

const repSchema = new mongoose.Schema({
    type: Number,
    min: 1,
    max: 100, 
}); 

module.exports = mongoose.model('exercise', exerSchema);
module.exports = mongoose.model('duration', durSchema);
module.exports = mongoose.model('reps', repchema);