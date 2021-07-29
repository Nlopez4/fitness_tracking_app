const router = require('express').Router();
const userCtrl = require('../controllers/user');


// GET /user
router.get('/user', isLoggedIn, userCtrl.index);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

//this route logs you out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});




module.exports = router;


