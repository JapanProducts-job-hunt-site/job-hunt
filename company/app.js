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
    var offer_info = {
        "company": req.query.comp_name,
        "location": req.query.location,
        "Industry": req.query.industry
    };


    res.send(offer_info);


    //after pushing registor button
});

app.listen(port, function () {
    console.log("Run @ http://localhost:"+port);
});//listen