
// data for exercise

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerSchema = new mongoose.Schema({
    exercise: String,
        // enum: ['Pushup', 'Pull Ups', 'Chin Ups', 'Barbell Squats', 'Air Squats', 'Bulgarian Split Squat', 'Goblet Squat','Dumbbell Squat', 'Wall Sits', 'Conventional Deadlift', 'Sumo Deadlift', 'Kettle Bells', 'Outdoor Walk', 'Indoor Walk', 'Outdoor Run', 'Treadmill', 'Row', 'Bicycle', 'Bench Press', 'Dips', 'Dumbbell Press', 'Dips']
    
});

module.exports = mongoose.model('Exercise', exerSchema);


// // display 
// findExercise.find({}, function (err, result) {
//     if (err) return handleError(err);
// }); 












