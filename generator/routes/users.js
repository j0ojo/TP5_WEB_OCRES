import express from 'express';

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.status(200).json({db});
  res.send('respond with a resource');
  res.send(db);
});


 
module.exports = router;
