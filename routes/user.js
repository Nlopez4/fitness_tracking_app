const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const create = require('../models/workoutlog');


// router.get("/", function (req, res) {
//   console.log(req.user, "index")
//   res.render("user", {
//     user: req.user,
//   });
// });



// GET /user
router.get('/', isLoggedIn, userCtrl.index);
//router.get('/user', isLoggedIn, userCtrl.create);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }





module.exports = router;


