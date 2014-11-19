describe('Exercise8', function() {
    'use strict';

    // mock the Exercise8 module
    beforeEach(angular.mock.module('Exercise8'));

    // test rot13 filter
    it('encodes a string using ROT13', function() {
        inject(function(rot13Filter) {
            expect(rot13Filter('hello')).not.toBe('hello');
            expect(rot13Filter('hello')).toBe('uryyb');
            expect(rot13Filter('a')).toBe('n');
            expect(rot13Filter('hello world')).toBe('uryyb jbeyq');
        });
    });
});
