
// data for exercise

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerSchema = new mongoose.Schema({
    exercise: String, 
    log: String,
        // enum: ['Pushup', 'Pull Ups', 'Chin Ups', 'Barbell Squats', 'Air Squats', 'Bulgarian Split Squat', 'Goblet Squat','Dumbbell Squat', 'Wall Sits', 'Conventional Deadlift', 'Sumo Deadlift', 'Kettle Bells', 'Outdoor Walk', 'Indoor Walk', 'Outdoor Run', 'Treadmill', 'Row', 'Bicycle', 'Bench Press', 'Dips', 'Dumbbell Press', 'Dips']
    
});

module.exports = mongoose.model('Exercise', exerSchema);
//duration: {type: Number, min: 1, max: 60, required: true}
//reps: {type: Number, min: 1, max: 100, required: true}



// // display 
// findExercise.find({}, function (err, result) {
//     if (err) return handleError(err);
// }); 












