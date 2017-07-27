(function() {
    'use strict';

    angular
        .module('app')
        .filter('catalogCountry', ['$filter', catalogCountry]);

    function catalogCountry($filter) {
        return function(array, searchObj) {
            if (!searchObj) {
                return array;
            }
            // Extend angulat.filter for Giift dmo name filter
            return $filter('filter')(array, searchObj, function(actual, expected) {
                if (expected !== '') {
                    var searchString = expected.toString().split(',');
                    return (searchString.indexOf(actual) !== -1);
                }
                return true;
            });
        };
    }
})();