const logDuration = require('../models/duration');

module.exports = {
  index,
};

function index(req, res) {
  logDuration.find({}, function (err, duration) {
    res.render('user/index');
})
};






