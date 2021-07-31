const User = require('../models/user');
const Exercise = require('../models/workoutlog');


function index(req, res, next) {
 const user = req.user 
    User.find({_id:req.user._id}, function(err, user) {
      console.log(user)
       Exercise.find({}, function(err, exercise) {
      console.log("exercise", exercise)
      res.render('user/index', { user, exercise });
   })
  })
  };

  
//create function
function create(req, res) {
  console.log(req.body)
  const exercise = new Exercise(req.body)
  exercise.save(function (err){
      if(err)
      return res.send(err)
      res.redirect("/user")
  })
}





module.exports = {
    index,
    create,
};

