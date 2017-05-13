const connection = require('../db');
const request = require('request');
const Api = require('../../keys');
const Promise = require('bluebird');
const axios = require('axios');
const sha1 = require('sha1');
const visUtils = require('../../visualization/visUtils.js');

//I(John) think these should be named relating to what theyre doing
//this is the interface that interacts with the database, abstracting to get or post
//isn't clear, in my opinion
module.exports = {
  users: {
    get: (user, callback) => {
      var user = [user.user, user.pass];
      var queryString = `SELECT salt, password, id, name FROM users WHERE name = '${user[0]}';`
      connection.query(queryString, (err, data) => {
        if(err) {
          console.log('err');
          callback(err, null);
        } else {
          console.log("Schema query,", data);
          callback(null, data);
        }
      })

    },
    post: (new_user, callback) => {
       var user = [new_user.name, new_user.password, new_user.email, new_user.salt, new_user.age, new_user.skill];
       var queryString = `INSERT INTO users( name, password, email, salt, age, skill ) VALUES (?, ?, ?, ?, ?, ?);`
       connection.query(queryString, user, (err, data) => {
         if (err) {
           console.log(err);
           callback(err, null);
         } else {
           console.log('posted users to database');
           callback(null, data);
         }
       })
    }
  },
  dive_sites: {
    get: (req, res) => {
      connection.query('SELECT * FROM dives', (err, data) => {
        if (!err) {
          console.log('retrieved all dives from db');
          res.send(data);
        } else {
          console.log('Error retrieving dive sites: ', err.message);
          res.send(404);
        }
      })
    },
    post: (new_sites, callback) => {
      var diveSite = [ new_sites.name, new_sites.longitude, new_sites.latitude, new_sites.rating, new_sites.description, new_sites.user_dive];
      var queryString = 'INSERT INTO dives( name, longitude, latitude, rating, description, user_dive ) VALUES ( ?, ?, ?, ?, ?, ?)';
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
    get: (req, res) => {
      console.log('trying to get comments for: ', req.body);
      let diveID = req.body.diveSite_id;
      let queryString = 'SELECT * FROM comments INNER JOIN dives ON dives.id=comments.divesite_id LEFT JOIN users ut on comments.user_id = ut.id WHERE comments.divesite_id=' + diveID;

      return connection.queryAsync(
        queryString
      );
    },
    post: (new_comment, callback) => {
      var newComment = [new_comment.divesite_id, new_comment.message, new_comment.user_id, new_comment.date_1];
      var queryString = 'INSERT INTO comments(divesite_id, message, user_id, date_1 ) VALUES(?,?,?,?)'
      connection.query(queryString, newComment ,function(err, data){
        if (err){
          console.log('could not post comment to database');
          callback(err, null);
        } else{
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
    home: (req, res) => {
      let homeWeather = [];
      const norCalCoordinates = '37.7910,-122.5401';
      const centralCalCoordinates = '35.3257,-120.9237';
      const southCalCoordinates = '37.8267,-122.4233';

      //remove XXXXX for this to work
      axios.get(`https://api.darksky.net/forecast/${Api.darkSky}/${norCalCoordinates}`)
        .then( (result) => {
          homeWeather.push(result.data)
          axios.get(`https://api.darksky.net/forecast/${Api.darkSky}/${centralCalCoordinates}`)
            .then( (result) => {
              homeWeather.push(result.data);
              axios.get(`https://api.darksky.net/forecast/${Api.darkSky}/${southCalCoordinates}`)
                .then( (result) => {
                  homeWeather.push(result.data);
                  res.json(homeWeather);
                })
            })
        })
        .catch( (err) => {
          console.log('Error retrieving home page weather: ', err.message);
      })

     }
  },
  ocean: {
    get: (req, res) => {
      /*field options for formatData:  [ '#YY','MM','DD','hh','mm','WDIR','WSPD','GST','WVHT',
          'DPD','APD','MWD','PRES','ATMP','WTMP','DEWP','VIS','PTDY','TIDE' ]*/
      let latitude = +req.body.location.lat;
      let longitude = +req.body.location.lng * -1;
      let bouyId = visUtils.getBouy(latitude, longitude);
      console.log('Closest bouy: ', bouyId);
      axios.get(`http://www.ndbc.noaa.gov/data/realtime2/${bouyId}.txt`)
        .then( (result) => {
          let toFormat = result.data.split('\n').slice(0, 14);
          let waveHeights = visUtils.formatData(result.data, 'WVHT');

          res.send(waveHeights);
        })
        .catch( (err) => {
          console.log('Error getting bouy data: ', err);
        })
    }
  }
};

