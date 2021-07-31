// mongoose connection
<<<<<<< HEAD
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// });

// const db = mongoose.connection; 
// db.once('open', _ => {
//   console.log('Database connected:', process.env.DATABASE_URL)
// })

<<<<<<< HEAD
// db.on('error', err => {
//   console.error('connection error:', err)
// })


const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/FitnessTracking', {
  useNewUrlParser: true,
  useFindAndModify: false,
=======
// MAKE SURE TO ONLY USE ONE 

// const mongoose = require('mongoose');


const db = mongoose.connection; 
db.once('open', _ => {
  console.log('Database connected:', process.env.DATABASE_URL)
})


db.on('error', err => {
  console.error('connection error:', err)
})

// const db = mongoose.connection
// db.once('open', _ => {
//   console.log('Database connected:', process.env.DATABASE_URL)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })





=======
>>>>>>> main
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/FitnessTracking', {
  useNewUrlParser: true,
>>>>>>> c81592971193c6d293d70a0d493a58f6587f9fb1
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
 
});
const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
<<<<<<< HEAD
});
=======
});

<<<<<<< HEAD
>>>>>>> c81592971193c6d293d70a0d493a58f6587f9fb1
=======


>>>>>>> main
