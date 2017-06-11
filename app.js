var express = require("express");
var app = express();

/*
 app.use(express.static(__dirname + '/public'));
 var port = 3000;


 app.all("/", function (req, res)
 {
 // console.log(__dirname + "/index.html");
 console.log(__dirname + "/index.html");
 res.sendFile(__dirname + "/index.html");
 });

 app.listen(port ,function()
 {
 console.log(__dirname);

 console.log("http://localhost:" + port);
 });
 */

var port = 3000;

app
    .all("/", function (req, res) {
        // console.log(__dirname + "/index.html");
        console.log(__dirname + "/index.html");
        res.sendFile(__dirname + "/index.html");
    })
    .use(express.static(__dirname + '/public'))
    .listen(port, function () {
        console.log(__dirname);
        console.log("http://localhost:" + port);
    });


/*
 var port = 3000;
 app
 .get('/', function(req, res){
 res.sendFile(__dirname + "/index.html");
 })
 .use(express.static(__dirname + '/public'))
 .listen(port, function(){
 console.log(__dirname);
 console.log("http://localhost:" + port);
 });
 */