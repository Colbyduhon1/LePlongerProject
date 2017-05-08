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
			//we can call .then()
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
			// model.users.post(req.body){
			// res.sendStatus(201);
			// }
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
			model.new_users.post()
			.then()
		}
	}
};

