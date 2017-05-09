
var connection = require('../db');
var request = require('request');
var Api = require('../../keys');

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
    post: (new_sites) => {
      return connection.queryAsync(
        `INSERT INTO dives (name, longitude, latitude, rating, description)
         VALUES ('${new_sites.name}', '${new_sites.longitude}', '${new_sites.latitude}',
          '${new_sites.rating}, '${new_sites.description}');`
      );
    }
  },
  comments: {
    get: (comments) => {
      return connection.queryAsync(
        `SELECT * FROM comments;`
      );
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

