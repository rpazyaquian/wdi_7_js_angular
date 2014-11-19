angular.module('Demo').controller('UsersCtrl', function($scope, $http, TitleFactory, SkillFactory, UserFactory) {
  'use strict';

  $scope.titles = TitleFactory.titles;
  $scope.skills = SkillFactory.skills;
  $scope.users = UserFactory.users;

  $scope.getCheckedSkills = function() {
    var currentUserSkills = $scope.skills;
    var checkedSkills = currentUserSkills.filter(function(index) {
      return index.checked == true;
    });
    var returnedSkills = checkedSkills.map(function(skill){
      return skill.id;
    });
    return returnedSkills;
  }

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
    $http.post('http://localhost:3000/users', {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        title_id: user.title_id,
        skill_ids: $scope.getCheckedSkills()
      }
    })
    .success(function(response) {
      UserFactory.fetch();
      $scope.user = {skills:[]}
    });
  };

  $scope.updateUser = function(user) {
    $http.put(('http://localhost:3000/users/' + user.id), {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        title_id: user.title_id,
        skill_ids: $scope.getCheckedSkills()
      }
    })
    .success(function(response) {
      UserFactory.fetch();
      $scope.user = {skills:[]}
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