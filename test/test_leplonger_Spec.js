  var request = require('request');
  var expect = require('chai').expect;

describe('server', function() {
  it('should respond to GET requests for / with a 200 status code', function(done) {
    request('http://127.0.0.1:8080/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should send back parsable stringified JSON', function(done) {
    request('http://127.0.0.1:8080/dives', function(error, response, body) { 
      expect(JSON.parse.bind(this, body)).to.not.throw();
      done();
    });
  });

  it('should send back an object', function(done) {
    request('http://127.0.0.1:8080/dives', function(error, response, body) {
      var parsedBody = JSON.parse(body);
      expect(parsedBody).to.be.an('array');
      done();
    });
  });

  it('should be able to add dive site', function(done) {
    var requestParams = {
      method: 'POST',
      uri: 'http://127.0.0.1:8080/new_sites',
      json: {
        name: "name",
        longitude: -128.27232,
        latitude: 38.00000,
        rating: "Advanced",
        description: "None"} 
      };

    request(requestParams, function(error, response, body) {
      expect(body.affectedRows).to.equal(1);
      done();
    });
  });

  it('should accept POST requests to /new_sites and add new dive site.', function(done) {
    var requestParams = {
      method: 'POST',
      uri: 'http://127.0.0.1:8080/new_sites',
      json: {
        "name": "sam",
        "longitude": -123.89929,
        "latitude": 33.35414,
        "rating": 'Novice',
        "description": "None"} 
      };

    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });


  it('should be able to add new users to database', function(done) {
    var requestParams = {
      method: 'POST',
      uri: 'http://127.0.0.1:8080/new_users',
      json: {
        "user": "username",
        "pass": "password",
        "repeatedPassword": "password",
        "skill": "Advanced",
        "age": 7,
        "email": "diveguy@gmail.com"
      }
    };


    request(requestParams, function(error, response, body) {
      // Now if we request the log, that message we posted should be there:
      request(requestParams, function(error, response, body) {
        expect(body).to.equal("username");
        done();
      });
    });
  });

  it('Should 404 when asked for a nonexistent endpoint', function(done) {
    request('http://127.0.0.1:8080/meow_mix', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  xit('Should display weather data for given dive site.', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:8080/weather',
      body: {
      location: {
        lat: -127.345,
        lng: 38.000
      }}
    };

    request(requestParams, function(error, response, body) {
      //console.log(body)
      expect(JSON.parse(body).results.length > 1).to.equal(true);
      done();
    });
  });

  xit('Should populate new comments when user posts about a site', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:8080/newcomment',
      new_comment: { 
        divesite_id:  2,
        user_id: 2,
        message:'Carmel Point had terrible viability!',
        date_1: new Date(), 
      }
    };

    request(requestParams, function(error, response, body) {
      console.log(body)
      var message = JSON.parse(body);
      console.log(message)
      expect(typeof message === 'object').to.equal(true);
      done();
    });
  });

  it('Should render comments when user selects a site', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:8080/comments',
      divesite_id: 1
    };

    request(requestParams, function(error, response, body) {
      console.log(response.body)
      var message = JSON.parse(body).results;
      expect(typeof message === 'object').to.equal(true);
      done();
    });
  });
});


