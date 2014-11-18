// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    // basic scope properties
    $scope.greeting = 'Hello';

    $scope.person = {
        firstName: 'Rebecca',
        lastName: 'Paz'
    };

    // update scope properties using $watch
    var redFruits = ['apple', 'cherry', 'strawberry'];
    var greenFruits = ['kiwi', 'avocado', 'honeydew'];
    var blueFruits = ['taro', 'blueberry', 'raisins']

    $scope.favFruits = [];

    $scope.$watch('favColor', function(newValue, oldValue) {
    	switch (newValue) {
    		case 'red':
    			$scope.favFruits = redFruits;
    			break;

    		case 'green':
    			$scope.favFruits = greenFruits;
    			break;

            case 'blue':
                $scope.favFruits = blueFruits;
                break;

    		default:
    			$scope.favFruits = [];
    			break;
    	}
    });
});