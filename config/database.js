
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', process.env.DATABASE_URL)
})

db.on('error', err => {
  console.error('connection error:', err)
})