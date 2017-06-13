/**
 * Created by KishikawaItaru on 2017/06/07.
 */
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var assert = require('assert');

/*
var express = require("express");
var app = express();

app.use(express.static('view'))
var port = 8000;

app.all("/", function (req, res) {
    res.sendFile(__dirname + "/view/signUp/signUp.html");
});
*/

var url = 'mongodb://localhost:27017/test';

router.get('/', function(req, res, next)
{
    res.render('signIn');
});

router.post('insert', function(req, res, next)
{
    console.log("insert");
    var item =
        {
            name: req.body.name,
            education: req.body.education,
            place: req.body.place,
            email: req.body.e-mail,
            password: req.body.password,
            profile: req.body.profile
        };

    mongo.connect(url, function(err, db)
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
app.listen(port ,function(){
    console.log("http://localhost:" + port);
});
*/