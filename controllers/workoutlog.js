<<<<<<< HEAD
const Log = require('../models/workoutlog');

module.exports = {
  index, 
}; 


function index(req, res) {
  Log.find({}, function (err, workoutlog) {
    res.render('user/index'); 
  })
}; 


=======
// const log = require('../models/workoutlog'); 
// const Exercise = require('../models/workoutlog');


// module.exports = {
//   index,
//   create,
//   newExercise,
// };

// function index(req, res) {
//   res.send('user/index')
// }; 

// //create function
// function create(req, res) {
//   console.log(req.body)
//   const exercise = new Exercise(req.body)
//   exercise.save(function (err){
//       if(err) 
//       return res.send(err)
//       res.redirect("/user")
//   })
// }
>>>>>>> main
