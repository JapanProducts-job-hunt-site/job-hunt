var express = require("express");
var app = express();
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser  = require("body-parser");


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
    .all("/", function (req, res)
    {
        // console.log(__dirname + "/index.html");
        console.log(__dirname + "/index.html");
        res.sendFile(__dirname + "/index.html");
    })
    .use(express.static(__dirname + '/public'))
    .listen(port, function ()
    {
        console.log(__dirname);
        console.log("http://localhost:" + port);
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/insert", function(req, res, next)
{
    console.log("insert");
    console.log(req.body);
    var item =
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };

    mongodb.connect(url, function(err, db)
    {
        assert.equal(null, err); //check if there is error or not. If ok, continue
        db.collection('userData').insertOne(item, function(err, result)
        {
            assert.equal(null, err);
            console.log('Item inserted.');
            db.close();
            console.log(__dirname + "/user/view/myPage/myPage.html");
            res.sendFile(__dirname + "/user/view/myPage/myPage.html");
        });
    });
});


var url = 'mongodb://localhost:27017/test';

router.get('/', function(req, res, next)
{
    res.render('index');
});

router.post("insert", function(req, res, next)
{
    console.log("insert");
    var item =
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };

    mongodb.connect(url, function(err, db)
    {
        assert.equal(null, err); //check if there is error or not. If ok, continue
        db.collection('userData').insertOne(item, function(err, result)
        {
            assert.equal(null, err);
            console.log('Item inserted.');
            db.close();
        });
    });
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