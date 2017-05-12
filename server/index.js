const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const rout = require('./routes');

const cookiesMiddleware = require('universal-cookie-express');


const app = express();
const port = process.env.PORT || 8080;
const SampleData = require('./db/sampledata/weather.js');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookiesMiddleware())


//Router
const router = require('./routes.js');

//Serve static files
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.static(path.join(__dirname, '../client/assets/')));

//All routes handled here
app.use('/', router);

app.listen(port, function () {
	console.log('server running on port ', port);
});
