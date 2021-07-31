// For workoutlog data
const express = require('express'); 
const router = express.Router();
const repsCtrl = require('../controllers/reps');



// GET and POST will go here
router.get('/', repsCtrl.index); 


 module.exports = router; 