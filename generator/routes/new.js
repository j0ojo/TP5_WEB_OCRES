import express from 'express';

var express = require('express');
<<<<<<< HEAD
const axios = require('axios').default;
const _ = require('lodash');
var router = express.Router();
var bodyParser = require('body-parser')

const db = [{
    Title: "Guardians of the Galaxy Vol. 2",
    id : "0",
    Year:"2017",
    Rated:"PG-13",
    Released:"05 May 2017",
    Runtime:"136 min",
    Genre:"Action, Adventure, Comedy, Sci-Fi",
    Director:"James Gunn",
    Writer:"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    Actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 15 wins & 56 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings:[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
    Metascore:"67",
    imdbRating:"7.6",
    imdbVotes:"556,178",
    imdbID:"tt3896198",
    Type:"movie",
    DVD: "N/A",
    BoxOffice:"N/A",
    Production:"Marvel Studios, Walt Disney Pictures",
    Website:"N/A",
    Response:"True"},
    ];
=======
var router = express.Router();

const db = [{
    Title: "Guardians of the Galaxy Vol. 2",
    id : "0"
    }];
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d


    //NEW ROUTES

    //GET localhost:3000/movies/
<<<<<<< HEAD
    router.get('/', (req, res,next) => {
=======
    router.get('/', (req, res) => {
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d

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
<<<<<<< HEAD
  router.put('/',(req,res,next)=>{

      axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'd232f7cf'
        }
      })

      .then(function (response) {
      
      const {Title}=req.body;
      const id=_.uniqueId();

      db.push({Title,id});
      res.send(db);
=======
  router.put('/',(req,res)=>{
      const {Title}=req.body;
      const id=_.uniqueId();

      users.push({Title,id});

>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d
      res.json({
          message: `Just added ${id}`,
          Title:{Title,id}
      });
<<<<<<< HEAD

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  

  
=======
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d
  });
  
  //POST localhost:3000/movies/:id

<<<<<<< HEAD
  router.post('/:id',(req,res,next)=>{
    
    axios.post('http://www.omdbapi.com/', {
      params: {
        apikey: 'd232f7cf'
      }
    })
    .then(function (response) {

      const {id} = req.params;
      const {Title} = req.body;
      const user= _.find(db,["id",id]);
      
      userToUpdate.Title=Title;
      res.json({
          message:`Just update ${id} with ${Title}`
      });
    })
    .catch(function (error) {
      console.log(error);
    });

=======
  router.post('/:id',(req,res)=>{
    
   
    const {id} = req.params;
    const {Title} = req.body;
    const user= _.find(users,["id",id]);
    
    userToUpdate.Title=Title;
    res.json({
        message:`Just update ${id} with ${Title}`
    });
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d
    
  });
  //DELETE localhost:3000/movies/:id

<<<<<<< HEAD
router.delete('/:id',(req,res,next)=>{
    const {id}=req.params;
    _.remove(db,["id",id]);
=======
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    _.remove(users,["id",id]);
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d

    res.json({
        message : `Just removed ${id}`
    });
});





