const models = require('../models/index.js');
const data = require('./sampledata/divesites.js');
const user = require('./sampledata/users.js');

//saves seed data to database
data.divesites.forEach(function (site) {
	models.dive_sites.post(site, function(err, data) {
		if( err ) {
			console.log(err);
		} else {
			console.log('saved dive-site to database');
		}
	})
})


user.users.forEach(function(user) {
	models.users.post(user, function(err, data) {
		if ( err ) {
			console.log(err);
		} else {
			console.log('saved user to database');
		}
 	})
})