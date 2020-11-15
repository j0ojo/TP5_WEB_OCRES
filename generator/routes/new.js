import express from 'express';

var express = require('express');
var router = express.Router();

const db = [{
    Title: "Guardians of the Galaxy Vol. 2",
    id : "0"
    }];


    //NEW ROUTES

    //GET localhost:3000/movies/
    router.get('/', (req, res) => {

        res.status(200).json({db});
        res.send('Movies list');
        res.send(db);
      });

    //GET localhost:3000/movies/:id 
router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    const db=_.find(db,["id",id]);
     
    res.status(200).json({
      message:'user found',
      Title
    });
  });
  

  //PUT localhost:3000/movies/
  router.put('/',(req,res)=>{
      const {Title}=req.body;
      const id=_.uniqueId();

      users.push({Title,id});

      res.json({
          message: `Just added ${id}`,
          Title:{Title,id}
      });
  });
  
  //POST localhost:3000/movies/:id

  router.post('/:id',(req,res)=>{
    
   
    const {id} = req.params;
    const {Title} = req.body;
    const user= _.find(users,["id",id]);
    
    userToUpdate.Title=Title;
    res.json({
        message:`Just update ${id} with ${Title}`
    });
    
  });
  //DELETE localhost:3000/movies/:id

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    _.remove(users,["id",id]);

    res.json({
        message : `Just removed ${id}`
    });
});





