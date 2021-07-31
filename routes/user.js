const router = require('express').Router();
const userCtrl = require('../controllers/user');


// GET /user
router.get('/user', isLoggedIn, userCtrl.index);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  router.get("/", function (req, res) {
    res.render("user", {
      user: req.user,
    });
  });

module.exports = router;


