// initialize the app
angular.module('Cart', []);

// main controller
angular.module('Cart').controller('MainCtrl', function($scope) {
    'use strict';

    $scope.items = [{
        name: 'iPhone',
        price: 99.99
    }, {
        name: 'Red Bull',
        price: 2.50
    }, {
        name: '3DSXL',
        price: 150.00
    }];
});