const User = require('../models/user');

function index(req, res, next) {
    User.find({}, function(err, user)
     res.render('user/index', {
      user,
      user: req.user
      });
   });
  }

  


module.exports = {
    index,
};

