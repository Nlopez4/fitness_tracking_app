
// MAKE SURE TO ONLY USE ONE 

// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// });

// const db = mongoose.connection
// db.once('open', _ => {
//   console.log('Database connected:', process.env.DATABASE_URL)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })





const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/FitnessTracking', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
