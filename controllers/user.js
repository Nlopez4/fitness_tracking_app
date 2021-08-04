const User = require('../models/user');
const Exercise = require('../models/exercise');
const Log = require('../models/log');




function index(req, res, next) {
 const user = req.user 
  User.find({_id:req.user._id}, function(err, user) {
   // console.log(user)
  Exercise.find({}, function(err, exercise) {
        //console.log("exercise", exercise)
  res.render('user/index', {user, exercise });
    })
    }).populate({path: "exercise"})
    console.log("new new", user)
    };



// //add new workout
// function newLog(req, res) {
//   console.log(req.body)
//   res.render('user/index', { newLog, title: 'Add a Workout' });
// }; 



//show function
function show(req, res) {
  
  // Exercise.find({_id:req.params.id}, function(err, exercise) {
  //   console.log(exercise)
  // res.render('user/index', { 
  //     exercise });
  // })
 };



  
//create function
function create(req, res) {
 // console.log(create)
 const log = new Log(req.body) 
//console.log(log, "new log")
 User.findOne({_id:req.user._id}, function(err, user) {
//console.log(user)
 user.exercises.push(log)
  user.save(function (err){
    if(err)
     return res.send(err)
    res.redirect(`/user`) 
   })
  })
  //console.log("add to log", log);

};
  






module.exports = {
    index,
   create,
    show,
    // newLog,
};

