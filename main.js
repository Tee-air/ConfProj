//Quel Modules sont vraiment utilisé et important.

var http = require('http');
var url = require('url');
var querystring = require('querystring');
//var findya = require('./lib/findyaway/findyaway.js');
var fs = require('fs');
var express = require('express');
var path = require('path');
var got = require('got');
//var packery = require('packery');
var PouchDB = require('pouchdb');
var bodyParser = require('body-parser')
var manager = require('./lib/ManagePackery/manageVue.js')



var app = express();
// TODO : Réduire au minimum les fichiers transiter vers le client
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/lib/font-awesome'));
app.use(express.static(__dirname + '/lib/bootstrap'));
app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/node_modules'));

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

console.log('Server ON');

app.get('/', function (req, res) {
    console.log('yes');
    res.sendFile('editTemplate.html', {
        root: path.join(__dirname, '/lib/vues/')
    });

});

app.get('/Profile', function (req, res) {
    var keyAPI = "RGAPI-1fb24620-e295-49cb-8213-637cbe74fcf4"
    res.sendFile('DisplayProfile.html', {
        root: path.join(__dirname, '/lib/vues/')
    });
    //findya.ajaxReq('https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/XxBipBipxX?api_key='+keyAPI, '');
});

app.get('/editVue', function (req, res) {
    //res.sendFile('editWithPackery.html', { root: path.join(__dirname, '/lib/vues/') });
    res.sendFile('vueEditor.html', {
        root: path.join(__dirname, '/lib/vues/')
    });
    //new Vue("", 1, "VueTest");
});

app.get('/connectionBDD', function (req, res) {
    var server = "DESKTOP-J384JJ1";
    var user = "TeeAir";
    var bdd = "ProjetBI";
    MSSQLConnect();


});

app.post('/addBlock', function (req, res) {
    console.log(req.body);

    
    return res.send("yes");
});


app.post('/saveAll', function (req, res) {
    console.log(req.body);

    var db = new PouchDB('https://localhost:5984/config');
    db.get('vue_1').then(function (doc) {
        console.log(doc);
        return res.send(doc);
    });

    return res.send("yes*n");
});

function getBlocks() {

}


app.listen(8081);