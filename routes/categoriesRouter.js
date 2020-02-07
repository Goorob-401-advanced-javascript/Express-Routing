'use strict';

const express = require('express');

const categories = require('../models/categories-model.js');

const categoriesRouter = express.Router();

categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:_id', getCategoriesid);
categoriesRouter.post('/categories' , postCategories);
categoriesRouter.put('/categories/:_id', updateCategories);
categoriesRouter.delete('/categories/:_id', deleteCategories);

function getCategories(req, res, next) {
  categories.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function getCategoriesid(req, res, next) {
  categories.create(req.body)
    .then(data => {
      // console.log('req body:', data);
      res.status(201).json(data);
    })
}

function postCategories(req , res , next){
  categories.create(req.body)
    .then(data => {
      console.log('req body :' ,data);
      res.status(201).json(data);

    })
}

function updateCategories(req , res , next){
  categories.update(req.params.id , req.body)
    .then(data => {
      res.status(201).json(data);
    });
}


function deleteCategories(req , res , next){
  categories.delete(req.params.id)
    .then(data => {
      res.status(200).json('item deleted');
    });
}

module.exports = categoriesRouter;
