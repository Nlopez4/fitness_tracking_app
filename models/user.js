const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      googleId: String,
      exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Log'
      }],

    },
    {
      timestamps: true,
    }
  );



  
module.exports = mongoose.model('User', userSchema);