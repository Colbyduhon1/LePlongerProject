const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));


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



app.listen(port, function () {
	console.log('server running on port ', port);
});



//workflow comment
//workflow comment 2