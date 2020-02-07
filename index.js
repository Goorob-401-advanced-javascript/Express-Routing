'use strict';
const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/categories-products-db';
const mongooseOptions ={
  //  random options that are going to allow us to be able to quickly read and index things from our database
  useNewUrlParser: true ,
  useCreateIndex: true ,
  useUnifiedTopology : true
}
mongoose.connect(MONGODB_URI , mongooseOptions);
server.start(3000);
