(function () {
    'use strict';

    angular
        .module('app')
        .filter('getById', [getByIdFilter]);

    function getByIdFilter() {
        return function (input, id) {
            var i = 0,
                len = input.length;
            for (; i < len; i++) {
                if (+input[i].id === +id) {
                    return input[i];
                }
            }
            return null;
        };
    }
})();
