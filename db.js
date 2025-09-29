const mongoose = require('mongoose');

const mongooseurl = 'mongodb://localhost:27017/hotal';

mongoose.connect(mongooseurl, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('connected to mongodb server');
});

db.on('error', (err) => {
  console.log('error occured in mongo connection', err);
});

db.on('disconnected', () => {
  console.log('disconnected to mongodb server');
});


module.exports = db;
