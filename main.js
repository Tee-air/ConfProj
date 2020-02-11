//Quel Modules sont vraiment utilisé et important ??

var http = require('http');
var url = require('url');
var querystring = require('querystring');
//var findya = require('./lib/findyaway/findyaway.js');
var fs = require('fs');
var express = require('express');
var path = require('path');
var fs = require('fs');
//var packery = require('packery');
var bodyParser = require('body-parser');
var managerVue = require('./lib/ManagePackery/manageVue.js');
var managerData = require('./lib/ManagePackery/manageData.js');

var managerCon = require('./lib/ManagePackery/manageCon.js');
var PouchDB = require('pouchdb');

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


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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

//app.get('/editVue', function (req, res) {

//var managerV = new managerVue();
//var  doc = managerV.initVue(1);

//res.sendFile('vueEditor.html', {
//root: path.join(__dirname, '/lib/vues/')
//});
//res.render("contentDoc",{content: doc.content});
//});



app.use('/editVue', (req, res, next) => {
    var managerV = new managerVue();
    var doc = managerV.initVue(1);

    fs.readFile('./lib/vues/vueEditor.html', 'utf8', function (err, data) {
        console.log(data);
        console.log(data.getElementById("toolMenu"));
    });

    res.sendFile('vueEditor.html', {
        root: path.join(__dirname, '/lib/vues/')
    });

    console.log(doc);
    res.status(200).json({ content: doc });
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
    var managerV = new managerVue();
    managerV.updateBlocks(req.body);
    return res.send("yes*n");
});

app.get('/showData', async function (req, res) {
    let managerD = new managerData();
    let doc = await managerD.showDoc(1);

    console.log(doc);

    res.status(200).json(doc.content);
});

app.get('/showDataAPI', function (req, res) {
    let managerC = new managerCon("API");
    managerC.keyAPI = "RGAPI-9425b2f6-d413-44d0-9705-c17c674e9914";
    let data = managerC.getCon();

    res.status(200).json(data);
});




app.listen(8081);