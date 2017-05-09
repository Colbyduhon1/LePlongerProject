
const connection = require('../db');
const request = require('request');
const Api = require('../../keys');
const Promise = require('bluebird');


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
    post: (new_user) => {
      return connection.queryAsync(
        `INSERT INTO users (Name, password, salt) VALUES ('${new_user.name}', '${new_user.password}',
        '${new_user.salt}');`
      );
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
    get: (callback) => {
      request('http://api.wunderground.com/api/' + Api.weatherUnderground  + '/geolookup/conditions/q/36.52167,-121.95361.json', function (err, response, body) {
        if (err) {
          console.log('err:', err);
          callback(err, null)
        } else {
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log(body)
          callback(null, body)
        }
      });
    }
  }
};

