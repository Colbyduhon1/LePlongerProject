const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist/')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
})





app.listen(port, function () {
	console.log('server running on port ', port);
});



//workflow comment
//workflow comment 2