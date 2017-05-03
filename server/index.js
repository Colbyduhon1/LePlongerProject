const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function () {
	console.log('server running on port ', port);
});