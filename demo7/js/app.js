// initialize the app
angular.module('Demo', [
    'ngRoute'
]);

angular.module('Demo').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .when('/titles', {
            templateUrl: 'templates/titles.html'
        })
        .when('/users', {
            templateUrl: 'templates/users.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('Demo').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    // vvvvvvvvvv IMPORTANT vvvvvvvvvv

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

// main controller shit

angular.module('Demo').controller('TitlesCtrl', function($scope, $http) {
  'use strict';

  $scope.populateForm = function(title) {
    $scope.title = title;
  }

  $scope.getTitles = function() {
    $http.get('http://localhost:3000/titles')
    .success(function(response) {
      $scope.titles = response;
    });
  };

  $scope.upsertTitle = function(title) {
    if (typeof title.id == 'undefined') {
      $scope.createTitle(title);
    } else {
      $scope.updateTitle(title);
    };
  };

  $scope.createTitle = function(title) {
    $http.post('http://localhost:3000/titles', {title: title})
    .success(function(response) {
      $scope.titles.push(response);
      $scope.title = {};
    });
  };

  $scope.updateTitle = function(title) {
    $http.put(('http://localhost:3000/titles/' + title.id), {title: title})
    .success(function(response) {
      $scope.title = {};
    });
  };

  $scope.deleteTitle = function(title) {
    $http.delete(('http://localhost:3000/titles/' + title.id))
    .success(function(response) {
      var index = $scope.titles.indexOf(title);
      $scope.titles.splice(index, 1);
    });
  };

  $scope.getTitles();
});

angular.module('Demo').controller('UsersCtrl', function($scope, $http) {
  'use strict';

  $scope.populateForm = function(user) {
    $scope.user = user;
  }

  $scope.getUsers = function() {
    $http.get('http://localhost:3000/users')
    .success(function(response) {
      $scope.users = response;
    });
  };

  $scope.upsertUser = function(user) {
    if (typeof user.id == 'undefined') {
      $scope.createUser(user);
    } else {
      $scope.updateUser(user);
    };
  };

  $scope.createUser = function(user) {
    $http.post('http://localhost:3000/users', {user: user})
    .success(function(response) {
      $scope.users.push(response);
      $scope.user = {};
    });
  };

  $scope.updateUser = function(user) {
    $http.put(('http://localhost:3000/users/' + user.id), {user: user})
    .success(function(response) {
      $scope.user = {};
    });
  };

  $scope.deleteUser = function(user) {
    $http.delete(('http://localhost:3000/users/' + user.id))
    .success(function(response) {
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);
    });
  };

  $scope.getUsers();
});