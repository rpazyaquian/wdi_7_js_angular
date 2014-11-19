// initialize the app
angular.module('Exercise8', []);

// custom filter
angular.module('Exercise8').filter('rot13', function() {
    return function(param) {

        var rot13 = function(string) {

            var rotateLetter = function(letter) {

                var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

                var letterIndex = alphabet.indexOf(letter);


                if (letterIndex == -1) {
                  return letter;
                } else if (letterIndex <= 12) {
                    return alphabet[letterIndex + 13];
                } else {
                    return alphabet[letterIndex - 13];
                }
            };

            // rotate each letter in string
            var newString = string.split('').map(function(character) {
              return rotateLetter(character);
            });

            return newString.join('');
        };

        if (param) {

            var inputWords = param.split(" ");

            var newWords = inputWords.map(function(word) {
              return rot13(word);
            });

            return newWords.join(' ');
        }
    };
});