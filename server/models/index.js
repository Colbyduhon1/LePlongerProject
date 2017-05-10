
const connection = require('../db');
const request = require('request');
const Api = require('../../keys');
const Promise = require('bluebird');
const axios = require('axios');


//I(John) think these should be named relating to what theyre doing
//this is the interface that interacts with the database, abstracting to get or post
//isn't clear, in my opinion
module.exports = {
  users: {
    get: (user) => {
      return connection.queryAsync(
      //NEED TO FIGURE OUT HOW WE ARE CALLING THIS AITH AUTHENITCATION
      );
    },
    post: (new_user, callback) => {
       var user = [new_user.id, new_user.name, new_user.password, new_user.email, new_user.salt, new_user.age, new_user.skill];
       var queryString = 'INSERT INTO users(id, name, password, email, salt, age, skill ) VALUES (?, ?, ?, ?, ?, ?, ?)';
       connection.query(queryString, user, function(err, data) {
         if (err) {
           console.log('could not post user to database');
           callback(err, null);
         } else {
           console.log('posted users to database');
           callback(null, data);
         }
       })
    }
  },
  dive_sites: {
    get: (sites) => {
      return connection.queryAsync(
        `SELECT * FROM dives;`
      );
    },
    post: (new_sites, callback) => {
      var diveSite = [new_sites.id, new_sites.name, new_sites.longitude, new_sites.latitude, new_sites.rating, new_sites.description, new_sites.user_dive];
      var queryString = 'INSERT INTO dives(id, name, longitude, latitude, rating, description, user_dive ) VALUES (?, ?, ?, ?, ?, ?, ?)';
      connection.query(queryString, diveSite, function(err, data) {
        if (err) {
          console.log('could not post dive-sites to database');
          callback(err, null);
        } else {
          console.log('posted dive-sites to database');
          callback(null, data);
        }
      })
    }
  },
  comments: {
    get: (comments) => {
      return connection.queryAsync(
        `SELECT * FROM comments;`
      );
    },
    post: (new_comment, callback) => {
      var NewComment = [new_comment.id, new_comment.diveSite_id, new_comment.message, new_comment.user_id];
      var queryString = 'INSERT INTO comments(id, diveSite_id, message, user_id) VALUES(?,?,?,?)'
      connection.query(queryString, NewComment ,function(err, data){
        if (err){
          console.log('could not post comment to database');
          callback(err, null);
        }
        else{
          console.log('posted new comment data to database');
          callback(null,data)
        }
      })
    }
  },
  weather: {
 //uncomment url for actual use, disabled so we don't hit api limit
    get: (req, res) => {
      const location = `${req.body.location.lat},${req.body.location.lng}`
      // const url = `http://api.wunderground.com/api/${Api.weatherUnderground}/geolookup/conditions/q/${location}.json`

      axios.get(url)
        .then( (result) => {
          console.log('received data from weatherUnderground');
          res.json(result.data);
        })
        .catch( (err) => {
          console.log('error from weather api: ', err.message);
        })
    },
    home: (res) => {
      let homeWeather = [];
      const norCalCoordinates = 'x,y';
      const centralCalCoordinates = 'x,y';
      const southCalCoordinates = 'x,y';
      
      //remove XXXXX for this to work
      axios.get(`http://api.XXXXXwunderground.com/api/${Api.weatherUnderground}/geolookup/conditions/q/${norCalCoordinates}.json`)
        .then( (result) => {
          homeWeather.push(result.data)
          axios.get(`http://api.XXXXXwunderground.com/api/${Api.weatherUnderground}/geolookup/conditions/q/${centralCalCoordinates}.json`)
        })    
        .then( (result) => {
          homeWeather.push(result.data);
          axios.get(`http://api.XXXXXwunderground.com/api/${Api.weatherUnderground}/geolookup/conditions/q/${southCalCoordinates}.json`)
        })        
        .then( (result) => {
          homeWeather.push(result.data);
          res.json(homeWeather);
        })
        .catch( (err) => {
          console.log('Error retrieving home page weather: ', err.message);
        })
        //remove this when using real api
        res.sendStatus(200);
    }
  }
};

