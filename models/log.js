const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
    {
      exercise: String,
  duration: {type: Number, min: 1, max: 60, required: true},
  reps: {type: Number, min: 1, max: 100, required: true}
 
    },
    {
      timestamps: true,
    }
  );



  
module.exports = mongoose.model('Log', logSchema);