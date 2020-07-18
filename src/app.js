const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
let nconf = require('nconf');

nconf.env();

app.set('view engine', 'hbs');

const sessionOptions = { 
	secret: 'secret for signing session id', 
	saveUninitialized: false, 
	resave: false 
};
app.use(session(sessionOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {next();});

app.get('/', function (req, res) {
	
	res.render('home');

});

app.get('/portfolio', function (req, res) {

	res.render('portfolio');
});

app.get('/blackjack', function (req, res) {

	res.render('blackjack');
});

const port = nconf.get('PORT') || 3000;
app.listen(port);
console.log(`server started on port ${port}`);