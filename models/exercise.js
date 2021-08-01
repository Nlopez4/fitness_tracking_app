
// data for exercise
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const exerSchema = new Schema({
    exercise: {
        type: String,
        required: true,
        enum: ['Pushup', 'Pull Ups', 'Chin Ups', 'Barbell Squats', 'Air Squats', 'Bulgarian Split Squat', 'Goblet Squat','Dumbbell Squat', 'Wall Sits', 'Conventional Deadlift', 'Sumo Deadlift', 'Kettle Bells', 'Outdoor Walk', 'Indoor Walk', 'Outdoor Run', 'Treadmill', 'Row', 'Bicycle', 'Bench Press', 'Dips', 'Dumbbell Press', 'Dips']
    }
});

module.exports = mongoose.model('exercise', exerSchema);
// const Log = mongoose.model('exercise', exerSchema);

// async function createLog() {
//     const exerLog = new Log({
//         type: String,
//         exercise: ['Pushup', 'Pull Ups', 'Chin Ups', 'Barbell Squats', 'Air Squats', 'Bulgarian Split Squat', 'Goblet Squat','Dumbbell Squat', 'Wall Sits', 'Conventional Deadlift', 'Sumo Deadlift', 'Kettle Bells', 'Outdoor Walk', 'Indoor Walk', 'Outdoor Run', 'Treadmill', 'Row', 'Bicycle', 'Bench Press', 'Dips', 'Dumbbell Press', 'Dips']
// });
//     const result = await exerLog.save();
//     console.log(result);
// }

// createLog(); 






<<<<<<< HEAD
=======
// display 
findExercise.find({}, function (err, result) {
    if (err) return handleError(err);
}); 
=======
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
>>>>>>> main












>>>>>>> c81592971193c6d293d70a0d493a58f6587f9fb1
