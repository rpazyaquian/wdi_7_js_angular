angular.module('Demo').factory('UserFactory', function UserFactory ($http) {
    var users = [];

    var fetch = function() {
      $http.get('http://localhost:3000/users')
      .success(function(response) {
        angular.copy(response, users);
      });
    };

    return {
      users: users,
      fetch: fetch
    }
});