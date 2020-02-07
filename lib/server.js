'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// internal files
const categoriesRoutes = require('../routes/categoriesRouter.js');
const productsRoutes = require('../routes/productsRouter.js');

// application contants
const app = express();
// 3rd party middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//   1st party middleware
app.use('/api/v1' , categoriesRoutes);
app.use('/api/v1' , productsRoutes);
module.exports ={
  server : app ,
  start : port =>{
    let PORT =port || process.env.PORT || 3000 ;
    app.listen(PORT ,() =>console.log(`listening on : ${PORT}`))
  }
}
