var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.set('view engine', 'ejs');

//Middleware
app.use('/assets', express.static('assets'));
//Middleware for body-parser
var urlencodedParser = bodyParser.urlencoded({extended : false});

app.get('/', function(req, res){
	res.render('index');
});
app.get('/contact', function(req, res){
	res.render('contact', {qs : req.query}); 
});
app.post('/contact',urlencodedParser, function(req, res){
	res.render('contact-success', {data : req.body});
});

app.get('/contact-success', function(req, res){
	res.render('contact-success');
});

app.get('/profile/:name',function(req, res){
	var data = {
		age : 31,
		job : 'developer',
		hobbies: ['reading', 'cooking', 'music']
	};
	res.render('profile', {person: req.params.name, data : data});//no need to give the entire path as it sees in views default
});

app.listen(port, function(req, res){
	console.log('Listening to port: '+port);
});
