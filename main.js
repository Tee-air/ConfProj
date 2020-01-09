var http = require('http');
var url = require('url');
var querystring = require('querystring');
var findya = require('./lib/findyaway/findyaway.js');
var fs = require('fs');
var express = require('express');
var path = require('path');
var $ = require('jquery');



var app = express();

app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/lib/font-awesome'));
app.use(express.static(__dirname + '/lib/bootstrap'));
app.use(express.static(__dirname + '/lib'));
console.log('Server ON');

app.get('/', function(req, res) {
    console.log('yes');
    res.sendFile('editTemplate.html', { root: path.join(__dirname, '/lib/vues/') });
    
});

app.get('/Profile', function(req, res){
    
    res.sendFile('DisplayProfile.html', { root: path.join(__dirname, '/lib/vues/') });
    findya.ajaxReq('https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/XxBipBipxX?api_key=RGAPI-1fb24620-e295-49cb-8213-637cbe74fcf4', '');
});

app.get('/editVue', function(req, res) {
    console.log('yes');
    res.sendFile('editVue.html', { root: path.join(__dirname, '/lib/vues/') });
    
});

app.get('/connectionBDD', function(req, res){
    var server = "DESKTOP-J384JJ1";
    var user = "TeeAir";
    var bdd = "ProjetBI";
   MSSQLConnect();
    
    
});


app.listen(8081);

