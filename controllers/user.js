const User = require('../models/user');
const Exercise = require('../models/workoutlog');
//const Log = require('../models/workoutlog');


function index(req, res, next) {
 const user = req.user 
    User.find({_id:req.user._id}, function(err, user) {
     // console.log(user)
       Exercise.find({}, function(err, exercise) {
      //console.log("exercise", exercise)
      res.render('user/index', { user, exercise });
   })
  //  const Log = Exercise
  //     Log.findOne(function(err, log){
  //       console.log("entered",log)
  //     })
  })
  };



// //add new workout
// function newLog(req, res) {
//   console.log(req.body)
//   res.render('user/index', { newLog, title: 'Add a Workout' });
// }; 



// //show function
// function show(req, res) {
//   Exercise.find({}, function(err, exercise) {
//   res.render('user/index', { 
//       exercise });
//   });
// };



  
//create function
function create(req, res) {
 const exercise = new Exercise(req.body)
  exercise.save(function (err){
    if(err)
     return res.send(err)
    res.redirect("user/index")
   })

};







module.exports = {
    index,
   create,
    // show,
    // newLog,
};

