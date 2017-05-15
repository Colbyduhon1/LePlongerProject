const models = require('../models');
const sha1 = require('sha1');
const Promise = require('bluebird');

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
		post: (req, res) => {
			models.users.get(req.body, (err, data) => {
				if(err) {
					console.log('Error: ', err.message)
				} else {
					if( data.length > 0) {
						if(sha1(req.body.pass + data[0].salt) === data[0].password){
							
							let userInfo = {
								name: data[0].name,
								id: data[0].id
							};

						  res.send(userInfo);
					  } else {
						  res.send('Wrong Password')
					  }
					} else {
						res.send('User does Not exist')
					}
				}
			});
		}
	},

	comments: {
		get: (req, res) => {
			models.comments.get(req)
				.then((response) => {
					res.json(response)
					});
		},
		post: (req, res) => {
		models.comments.post(req.body, (err, data) => {
			if(err){
				console.log('Error posting new comment to db', err)
			} else {
				let newComment = {};
				//Refactor name for user
				newComment.name = req.body.name;
				newComment.date_1 = req.body.date_1;
				newComment.message = req.body.message;
				//Refactor Skill//why are we saying the skill is experienced by default?
				newComment.skill = "Experienced"
				res.send(newComment);
			}
		})
		}
	},

	new_sites: {
		post: (req, res) => {
			console.log(req.body)
			models.dive_sites.post(req.body, (err, data) => {
				if(err){
					console.log('err', err)
				} else {
					res.json(data)
				}
			})		
		}
	},

	new_users: {
		post: (req, res) => {
			let fuel = Math.random() * 2343453479543;
			let newUser = {
				name: req.body.user,
				salt: fuel,
				password: sha1(req.body.pass + fuel),
				age: req.body.age,
				email: req.body.email,
				skill: req.body.skill
			};
			models.users.post(newUser, function(err, data) {
				if (err) {
					res.send('could not save user');
				} else {
					res.send(newUser.name);
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
