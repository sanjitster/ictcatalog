(function() {
    'use strict';

    angular
        .module('app')
        .factory('CountryService', ['$firebaseArray', '$firebaseRef', CountryService]);

    function CountryService($firebaseArray, $firebaseRef) {
        return $firebaseArray($firebaseRef.countries);
    }
})();