const log = require('../models/workoutlog')

module.exports = {
  index,
};

function index(req, res) {
  res.render('workoutlog/index')
}; 

