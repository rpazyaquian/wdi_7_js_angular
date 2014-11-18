// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/users').success(function(response) {
      // $http is a built in service
        $scope.users = response;
        // we get a response in return and make those the users
    });
});