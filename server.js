// server.js

var port = "8000";
var host = "0.0.0.0";
var Express = require('express');

var app = Express();

var rules = require('./app/index.js');
app.use(rules);

app.listen(port, host);

console.log("Yay it worked!");