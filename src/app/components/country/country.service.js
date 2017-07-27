(function() {
    'use strict';

    angular
        .module('app')
        .factory('BuyService', ['$firebaseArray', '$firebaseRef', BuyService]);

    function BuyService($firebaseArray, $firebaseRef) {
        return $firebaseArray($firebaseRef.buy);
    }
})();