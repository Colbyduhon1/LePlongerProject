  var request = require('request');
  var expect = require('chai').expect;

describe('server', function() {
  it('should respond to GET requests for / with a 200 status code', function(done) {
    request('http://127.0.0.1:8080/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // it('should send back parsable stringified JSON', function(done) {
  //   request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  //     expect(JSON.parse.bind(this, body)).to.not.throw();
  //     done();
  //   });
  // });

  it('should send back an object', function(done) {
    request('http://127.0.0.1:8080/dives', function(error, response, body) {
      var parsedBody = JSON.parse(body);
      expect(parsedBody).to.be.an('array');
      done();
    });
  });

  // it('should send an object containing a `results` array', function(done) {
  //   request('http://127.0.0.1:8080/weather', function(error, response, body) {
  //     var parsedBody = JSON.parse(body);
  //     expect(parsedBody).to.be.an('object');
  //     expect(parsedBody.results).to.be.an('array');
  //     done();
  //   });
  // });

  it('should accept POST requests to /new_sites', function(done) {
    var requestParams = {method: 'POST',
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

  // it('should respond with messages that were previously posted', function(done) {
  //   var requestParams = {method: 'POST',
  //     uri: 'http://127.0.0.1:3000/classes/messages',
  //     json: {
  //       username: 'Jono',
  //       message: 'Do my bidding!'}
  //   };

  //   request(requestParams, function(error, response, body) {
      
  //     // Now if we request the log, that message we posted should be there:
  //     request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  //       var messages = JSON.parse(body).results;
  //       expect(messages[0].username).to.equal('Jono');
  //       expect(messages[0].message).to.equal('Do my bidding!');
  //       done();
  //     });
  //   });
  // });

  // it('Should 404 when asked for a nonexistent endpoint', function(done) {
  //   request('http://127.0.0.1:3000/arglebargle', function(error, response, body) {
  //     expect(response.statusCode).to.equal(404);
  //     done();
  //   });
  // });

  // it('Should display our supreme competenece.', function(done) {
  //   request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  
  //     expect(JSON.parse(body).results.length > 1).to.equal(true);
  //     done();
  //   });
  // });

  // it('Should respoon with 200 status code for OPTIONS request', function (done) {
  //   var requestParams = {method: 'OPTIONS',
  //     uri: 'http://127.0.0.1:3000/classes/messages',
  //     json: {
  //       username: 'Jono',
  //       message: 'Do my bidding!'}
  //   };
  //   request(requestParams, function(error, response, body) {
  //     expect(response.statusCode).to.equal(200);
  //     done();
  //   });
  // });

  // it('Should populate results array with message objects', function(done) {
  //   var requestParams = {method: 'GET',
  //     uri: 'http://127.0.0.1:3000/classes/messages',
  //     json: {
  //       username: 'Jono',
  //       message: 'Do my bidding!'}
  //   };

  //   request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  //     var message = JSON.parse(body).results[0];
  //     expect(typeof message === 'object').to.equal(true);
  //     done();
  //   });
  // });

});
