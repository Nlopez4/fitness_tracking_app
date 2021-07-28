// For workoutlog data
const express = require('express'); 
const router = express.Router();
const workoutCtrl = require('../controllers/workoutlog');

router.get("/", function (req, res) {
    res.get("index", {
      user: req.user,
    });
  });

 module.exports = router; 