(function() {
    'use strict';

    angular
        .module('app')
        .factory('CatalogService', ['$firebaseArray', '$firebaseRef', CatalogService]);

    function CatalogService($firebaseArray, $firebaseRef) {
        return $firebaseArray($firebaseRef.catalog);
    }
})();