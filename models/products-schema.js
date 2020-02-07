'use strict';
const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type: String , require: true },

  price: { type : Number, require: true }

});
module.exports = mongoose.model('products' ,products);
