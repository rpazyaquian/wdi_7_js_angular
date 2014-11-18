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
      TitleFactory.fetch();
      $scope.titles.push(response);
      $scope.title = {};
    });
  };

  $scope.updateTitle = function(title) {
    $http.put(('http://localhost:3000/titles/' + title.id), {title: title})
    .success(function(response) {
      TitleFactory.fetch();
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