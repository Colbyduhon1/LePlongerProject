	var model = require('../models');

	module.exports = {
		dives: {
			get: (req, res) => {
				model.dive_sites.get(sites){
					res.json(sites);
				}
			},
			post: (req, res) => {
				model.dive_sites.post(req.body){
					res.sendStatus(201);
				}
			}
		},

		users: {
			get: (req, res) => {
				model.users.get(sites){
				res.json(sites);
				}
			}
			post: (req, res) => {
				model.users.post(req.body){
				res.sendStatus(201);
				}
			}
		},

		comments: {
			get: (req, res) => {

			},
			post: (req, res) => {

			}
		},

		new_sites: {
			get: (req, res) => {

			},
			post: (req, res) => {

			}
		},

		new_users: {
			get: (req, res) => {

			},
			post: (req, res) => {
				
			}
		}


	}

