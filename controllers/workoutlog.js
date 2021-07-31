const Log = require('../models/workoutlog');

module.exports = {
  index, 
}; 


function index(req, res) {
  Log.find({}, function (err, workoutlog) {
    res.render('user/index'); 
  })
}; 


