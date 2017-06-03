/**
 * Created by kaya on 6/3/2017.
 */
//registration process for job offer
var express = require("express");
var app = express();
var port = 3000;


app.all("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});
app.get("/register", function(req, res){
    res.send(req.query.comp_name);
});

app.listen(port);
