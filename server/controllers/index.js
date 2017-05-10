
const models = require('../models');
const sha1 = require('sha1');
const Promise = require('bluebird');


//I'm not sure but i think this needs to be promisified
//that way the interaction with the database will occure
//THEN with that info we send response to the client.

//if we can't figure it out, we can always pass along
//res to the model

module.exports = {
	dives: {
		get: (req, res) => {
			//extract info from request here
			//pass it into the model method(below)
			models.dive_sites.get(sites)
			//in theory, if this is a promise
			//we can call .then() with the results back from the database
				.then( (result) => {
					/*...*/
				});
		},
		post: (req, res) => {
			models.dive_sites.post(req.body)
				.then( (result) => {
					res.sendStatus(201);
				});
		}
	},

	users: {
		get: (req, res) => {
			// model.users.get(sites){
			// res.json(sites);
			// }
		},
		post: (req, res) => {
			console.log('OK')
			res.send("I am from users post")
		}
	},

	comments: {
		get: (req, res) => {
			model.comments.get()
			.then()

		},
		post: (req, res) => {
			model.comments.post()
			.then()
		}
	},

	new_sites: {
		get: (req, res) => {
			model.new_sites.get()
			.then()
		},
		post: (req, res) => {
			model.new_sites.post()
			.then()
		}
	},

	new_users: {
		get: (req, res) => {
			model.new_users.get()
			.then()
		},
		post: (req, res) => {
			console.log(req.body);
			var fuel = Math.random() * 2343453479543;			
			var newUser = {
				name: req.body.user,
				salt: fuel,
				password: sha1(req.body.pass + fuel),
				age: req.body.age,
				email: req.body.email,
				skill: req.body.skill
			}
			models.users.post(newUser, function(err, data) {
				if (err) {
					console.log('could not save user');
				} else {
					console.log('data');
				}
			})
		}
	},
	weather: {
		get: models.weather.get
      /*models.weather.get((err, data) => {
      	if (err) {
      		console.log('Cannot get weather data', err);
      	} else {
      		res.end(data)
      	}
      })*/
		
	}
};

