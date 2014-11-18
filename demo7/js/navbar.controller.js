angular.module('Demo').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    // vvvvvvvvvv IMPORTANT vvvvvvvvvv

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});