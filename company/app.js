/**
 * Created by kaya on 6/6/2017.
 */
var app = angular.module('plunker', ['ngTagsInput']);


app.controller('MainCtrl', function($scope, $http) {
    $scope.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];});