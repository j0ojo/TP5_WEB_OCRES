import express from 'express';

var express = require('express');
var router = express.Router();

const db = [{
Title: "Guardians of the Galaxy Vol. 2",
id : "0"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.status(200).json({db});
  res.send('respond with a resource');
  res.send(db);
});

router.get('/', function(req, res, next) {
  const {id} = req.params;
  const db=_.find(db,["id",id]);
  res.status(200).json({
    message:'user found',
    Title
  });
});

router.post('/',function(req,res,next){
  
  const temp=req.body;
  db.push(temp);
  res.send( 'post route ${temp.Title} added to the database'); //POSTMAN
  
});
 
module.exports = router;
