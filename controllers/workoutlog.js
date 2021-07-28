const log = require('./models/workoutlog')

module.exports = {
    new: log
  }

function log(req, res) {
    res.render('views/index');
  }