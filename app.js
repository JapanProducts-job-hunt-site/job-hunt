
var express = require("express");
var app = express();

app.use('/static', express.static('/public'));
var port = 4000;


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
