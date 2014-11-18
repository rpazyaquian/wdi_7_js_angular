// initialize the app
angular.module('Exercise5', []);

// main controller
angular.module('Exercise5').controller('MainCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });
});