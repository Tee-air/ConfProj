var http = require('http');
var url = require('url');
var querystring = require('querystring');
var findya = require('./lib/findyaway/findyaway.js');
var fs = require('fs');
var express = require('express')

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/plain"});
    
    res.write('Bien le bonjour');
    
    var routeToHeaven = findya.createRoute(page);
    
    res.writeHead(200, {"Content-Type": "text/html"});
    if (page === '/') {
        fs.readFile('./lib/vues/editTemplate.html', 'utf-8', function(err, content){
            if (err) throw err; 
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.write(content.toString());
            res.end();
            //console.log(content);
        });
    }    
});


app.use('/editVue', (req, res, next) => {
    var managerV = new managerVue();
    var  doc = managerV.initVue(1);
    
    fs.readFile('./lib/vues/vueEditor.html', 'utf8', function(err, data){
        //let parser = new DomParser();
        //var htmlDoc = parser.parseFromString(data, "text/html");
        //console.log(htmlDoc.getElementById("gridContent").firstChild);
        //htmlDoc.getElementById("gridContent").firstChild.innerHTML = managerV.getHtmlBlocks;
        //console.log(document.getElementById("toolMenu"));
        res.status(200).send(htmlDoc);

    });

    res.sendFile('htmlDoc', {
        root: path.join(__dirname, '/lib/vues/')
    });
 
  });



server.listen('8081');