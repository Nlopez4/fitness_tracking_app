// data for exercise, duration, and reps

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerSchema = new mongoose.Schema({
    type: String,
    enum: ['Pushup', 'Pull Ups', 'Chin Ups', 'Barbell Squats', 'Air Squats', 'Bulgarian Split Squat', 'Goblet Squat','Dumbbell Squat', 'Wall Sits', 'Conventional Deadlift', 'Sumo Deadlift', 'Kettle Bells', 'Outdoor Walk', 'Indoor Walk', 'Outdoor Run', 'Treadmill', 'Row', 'Bicycle', 'Bench Press', 'Dips', 'Dumbbell Press', 'Dips']
});

const durSchema = new mongoose.Schema({
    duration: {type: Number, min: 1, max: 60, required: true}
});

const repSchema = new mongoose.Schema({
   reps: {type: Number, min: 1, max: 100, required: true}
}); 



module.exports = mongoose.model('exercise', exerSchema);
module.exports = mongoose.model('duration', durSchema);
module.exports = mongoose.model('reps', repSchema);