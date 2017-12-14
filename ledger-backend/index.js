// import {app} from './routeconfig';
var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs');
var homeroute = require('./expressroutes/homeroutes');

var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

homeroute(app);



var port = process.env.PORT ? process.env.PORT : 4000,
    env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

require('./mongo/mongodbconfig.js')(env);
var server = app.listen(port, "127.0.0.1", function () {
    console.log("server running at " + port + "  ........");
    var host = server.address().address;
    port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});

