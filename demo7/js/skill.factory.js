angular.module('Demo').factory('SkillFactory', function SkillFactory ($http) {
    var skills = [];

    var resetChecked = function() {
        _.forEach(skills, function(item) {
            item.checked = false;
        });
    };

    var fetch = function() {
      $http.get('http://localhost:3000/skills')
      .success(function(response) {

        angular.copy(response, skills);
      });
    };

    return {
      skills: skills,
      fetch: fetch
    }
});