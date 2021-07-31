// data for exercise
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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






