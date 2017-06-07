/**
 * Created by kaya on 6/6/2017.
 */
var app = angular.module('plunker', ['ngTagsInput']);

<<<<<<< HEAD
app.controller('MainCtrl', function($scope, $http) {
    $scope.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];
=======

app.all("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});
app.get("/register", function(req, res){

    res.send(req.query.comp_name);
    //after pushing registor button
>>>>>>> e5f792dfe78b320cb07af5c64f475969ae3212cc
});
