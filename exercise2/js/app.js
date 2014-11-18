// initialize the app
angular.module('Calculator', []);  // no dependencies

// main controller
angular.module('Calculator').controller('MainCtrl', function($scope) {
  'use strict';

  $scope.x = 0;
  $scope.y = 0;

  var calc = function() {
    if (!isNaN($scope.x) && !isNaN($scope.y)) {
      $scope.result = $scope.x + $scope.y;
    }
  }

  $scope.$watchGroup(['x', 'y'], calc);

});