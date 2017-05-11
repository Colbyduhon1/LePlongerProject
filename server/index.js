const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const rout = require('./routes');


const app = express();
const port = process.env.PORT || 8080;
const SampleData = require('./db/sampledata/weather.js');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Router
const router = require('./routes.js');

app.use('/weather', router);

//Serve static files
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.static(path.join(__dirname, '../client/assets/')));

//routes
//this may have to be broken up, but i think that if we keep
//the route as '/', it will use the router for every request
//the databases sprint used one router for every endpoint
//the technical assessment used different routers depending on the endpoint

//I personally would say lets aim to use one router, so long as we don't
//exceed XX limit of lines in the router file
app.use('/', router);


app.listen(port, function () {
	console.log('server running on port ', port);
});














/*
THIS IS THE ORIGINAL SET OF ROUTES COLBY+JACKSON MADE, KEEPING THEM HERE
TEMPORARILY INCASE ROUTER DOESN'T WORK OR CAUSES TOO MANY ISSUES TO FIX

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get('/dives', (req, res) =>{

});

app.get('/users', (req, res) =>{

});

app.get('/comments', (req, res) =>{

});

app.post('/new_sites', (req, res) => {

});

app.post('/new_user', (req, res) => {

});
*/


