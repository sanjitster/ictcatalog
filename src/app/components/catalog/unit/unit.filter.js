(function() {
    'use strict';

    angular
        .module('app')
        .filter('catalogUnit', ['$filter', catalogUnit]);

    function catalogUnit($filter) {
        return function(array, searchObj) {
            if (!searchObj) {
                return array;
            }
            // Extend angulat.filter for Giift dmo name filter
            return $filter('filter')(array, searchObj, function(actual, expected) {
                if (expected !== '') {
                    return (actual === expected);
                }
                return true;
            });
        };
    }
})();