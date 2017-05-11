
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
		get: models.dive_sites.get,
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
			models.users.get(req.body, (err, data) => {
				if(err) {
					console.log('err')
				} else {
					if( data.length > 0) {
						if(sha1(req.body.pass + data[0].salt) === data[0].password){
						  res.send('User is def colby')
					  } else {
						  res.send('Wrong Password')
					  }
					} else {
						res.send('User does Not exist')
					}
				}
			})
		}
	},

	comments: {
		get: (req, res) => {
			console.log(req.body);
			models.comments.get(req)
		.then((response) => {
			res.json(response)
			});
		},
		post: (req, res) => {
		models.comments.post()
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
		get: models.weather.get,
		home: models.weather.home
	},
	ocean: {
		get: models.ocean.get
	}
};

