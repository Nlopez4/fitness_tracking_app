const logReps = require('../models/reps');

module.exports = {
  index,
};

function index(req, res) {
  logReps.find({}, function (err, reps) {
    res.render('user/index');
})
}; 

