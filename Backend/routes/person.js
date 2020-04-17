const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/Person.js');

/* GET ALL PERSONS */
router.get('/test', function(req, res, next) {
  res.send("Success Response");
});

/* GET ALL PERSONS */
router.get('/', function(req, res, next) {
  Person.find({}, function (err, persons) {
    if (err) return next(err);
    res.json(persons);
  });
});

/* GET SINGLE PERSON BY ID */
router.get('/:id', function(req, res, next) {
  Person.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PERSON */
router.post('/', function(req, res, next) {
  Person.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PERSON */
router.put('/:id', function(req, res, next) {
  Person.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PERSON */
router.delete('/:id', function(req, res, next) {
  Person.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
