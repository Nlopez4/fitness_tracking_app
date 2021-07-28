const log = require('../models/workoutlog')

module.exports = {
    new: worklog
  }

function worklog(req, res) {
    res.send('views/index');
  }