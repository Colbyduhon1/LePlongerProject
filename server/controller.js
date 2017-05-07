	var model = require('../models/dB_model_methods.js');

	module.exports = {
		dives: {
			get: function(req, res){
				model.dive_sites.get(sites){
					res.json(sites);
				}
			}
			post: function(req, res){
				model.dive_sites.post(req.body){
					res.sendStatus(201);
				}
			}
		}

		users: {
			get: function(req, res){
				model.users.get(sites){
				res.json(sites);
				}
			}
			post: function(req, res){
				model.users.post(req.body){
				res.sendStatus(201);
				}
			}
		}






	}

