angular.module('Demo').factory('TitleFactory', function TitleFactory ($http) {
    var titles = [];

    var fetch = function() {
      $http.get('http://localhost:3000/titles')
      .success(function(response) {
        angular.copy(response, titles);
      });
    };

    return {
      titles: titles,
      fetch: fetch
    }
});