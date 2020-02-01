'use strict';

const express = require('express');

const products = require('../models/products-model.js');

const productsRouter = express.Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:_id', getProductsid);
productsRouter.post('/products' , postProducts);
productsRouter.put('/products/:_id', updateProducts);
productsRouter.delete('/products/:_id', deleteProducts);

function getProducts(req, res, next) {
  products.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function getProductsid(req, res, next) {
  products.create(req.body)
    .then(data => {
      // console.log('req body:', data);
      res.status(201).json(data);
    })
}

function postProducts(req , res , next){
  products.create(req.body)
    .then(data => {
      console.log('req body :' ,data);
      res.status(201).json(data);

    })
}

function updateProducts(req , res , next){
  products.update(req.params.id , req.body)
    .then(data => {
      res.status(201).json(data);
    });
}


function deleteProducts(req , res , next){
  products.delete(req.params.id)
    .then(data => {
      res.status(200).json('item deleted');
    });
}

module.exports = productsRouter;
