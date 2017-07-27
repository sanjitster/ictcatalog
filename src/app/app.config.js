(function() {
    'use strict';

    angular
        .module('app')
        .config(['$firebaseRefProvider', 'firebaseCredentials', function($firebaseRefProvider, firebaseCredentials) {
            firebase.initializeApp(firebaseCredentials);
            $firebaseRefProvider.registerUrl({
                default: firebaseCredentials.databaseURL,
                catalog: firebaseCredentials.databaseURL + '/catalog',
                countries: firebaseCredentials.databaseURL + '/countries',
                buy: firebaseCredentials.databaseURL + '/buy'
            });
        }])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
            cfpLoadingBarProvider.includeBar = true;
        }])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.transformRequest = function(data) {
                if (angular.isUndefined(data)) {
                    return data;
                } else {
                    var str = [];
                    for (var p in data) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
                    }
                    return str.join('&');
                }
            };
        }]);

})();