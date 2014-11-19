// initialize the app
angular.module('Demo', []);

// custom filter
angular.module('Demo').filter('capitalize', function() {
    return function(param) {
        if (param) {
            return param[0].toUpperCase() + param.slice(1);
        }
    };
});

// could you also write it like this:

// var capitalizeString = function(string) {
//   if (string) {
//     return string[0].toUpperCase() + string.slice(1);
//   }
// }

// then

// angular.module('Demo').filter('capitalize', function() {
//     return capitalizeString(param);
// });

// ?