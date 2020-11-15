import express from 'express';

var express = require('express');
var router = express.Router();

const db = [{
    Title: "Guardians of the Galaxy Vol. 2",
    id : "0"
    }];


    //NEW ROUTES

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


app.get((req, res) => { 

    res.json({
        req:req.method,
        data: "This is GET"
    })
});

app.put('/test',(req, res) => { 

    res.json({
        req: req.method,
        data: "This is PUT"
    })
});

const db = {
    id : [
    {"Title": "Guardians of the Galaxy Vol. 2"},
]};
