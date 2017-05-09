const models = require('../models');
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
			console.log(req.body)
			res.send("User Login working")
			//next will be to seed the DB with the user and retrieve their info to populate the site
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
			console.log(req.body)
			res.send('New User Recieved')
			
		}
	},
	weather: {
		get: (req, res) => {
			console.log('weather route called')
      models.weather.get((err, data) => {
      	if (err) {
      		console.log('Cannot get weather data', err);
      	} else {
      		res.end(data)
      	}
      })
		}
	}
};

