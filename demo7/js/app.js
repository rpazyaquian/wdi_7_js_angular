// initialize the app
angular.module('Demo', [
    'ngRoute'
]);

angular.module('Demo').run(function (TitleFactory) {
  TitleFactory.fetch();
});

angular.module('Demo').run(function (SkillFactory) {
  SkillFactory.fetch();
});

angular.module('Demo').run(function (UserFactory) {
  UserFactory.fetch();
});

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