const log = require('../models/workoutlog')




module.exports = {
  index,
};

function index(req, res) {
  res.send('workoutlog/index')
}; 

