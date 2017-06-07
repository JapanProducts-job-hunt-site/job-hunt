/**
 * Created by SHO on 6/6/17.
 */

var express = require("express");
var app = express();
var port = 4000;


app.all("/", function (req, res) {
    res.sendFile(__dirname + "/view/signIn/signIn.html");
});

app.listen(port ,function(){
    console.log("http://localhost:" + port);
});