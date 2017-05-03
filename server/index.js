const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
  res.sendStatus(200);
});




app.listen(port, function () {
	console.log('server running on port ', port);
});



//workflow comment
//workflow comment 2