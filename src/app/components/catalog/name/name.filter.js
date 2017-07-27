(function() {
    'use strict';

    angular
        .module('app')
        .filter('catalogName', ['$filter', catalogName]);

    function catalogName($filter) {
        return function(array, searchObj) {
            if (!searchObj) {
                return array;
            }
            // Extend angulat.filter for Giift dmo name filter
            return $filter('filter')(array, searchObj);
        };
    }
})();