const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '../client/dist'));

app.get('/', function(req, res) {
  res.sendFile(express.static(__dirname + "../client/dist/index.html"));
  //res.end('hello world');
})





app.listen(port, function () {
	console.log('server running on port ', port);
});



//workflow comment
//workflow comment 2