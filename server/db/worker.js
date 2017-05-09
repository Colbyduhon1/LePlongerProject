const models = require('../models/index.js');
const data = require('./sampledata/divesites.js');

//saves seed data to database
data.divesites.forEach(function (site) {
	models.dive_sites.post(site, function(err, data) {
		if( err ) {
			console.log(err)
		} else {
			console.log('saved dive-site to database')
		}
	})
})