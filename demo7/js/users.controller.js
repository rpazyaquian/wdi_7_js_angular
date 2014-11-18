angular.module('Demo').controller('UsersCtrl', function($scope, $http, TitleFactory, SkillFactory, UserFactory) {
  'use strict';

  $scope.titles = TitleFactory.titles;
  $scope.skills = SkillFactory.skills;
  $scope.users = UserFactory.users;

  $scope.userHasSkill = function(skill) {
    var skill_id = skill.id;
    var skills = $scope.user.skills;
    var skills = skills.filter(function(index) {
      return index.id == skill.id;
    });

    if (skills.length > 0) {
      return true;
    } else {
      return false;
    }

  };

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
      UserFactory.fetch();
      $scope.user = {};
    });
  };

  $scope.updateUser = function(user) {
    $http.put(('http://localhost:3000/users/' + user.id), {user: user})
    .success(function(response) {
      UserFactory.fetch();
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

  $scope.user = {skills:[]};

});