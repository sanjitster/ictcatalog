(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('homepage', {
                url: '/homepage',
                templateUrl: 'app/homepage/Homepage.html',
                controller: 'HomepageController',
                controllerAs: 't'
            })
            .state('dashboard', {
                url: '/dashboard/:countryId',
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 't',
                params: {
                    countryId: null
                }
            })
            .state('redemption', {
                url: '/redemption/:dmoId',
                templateUrl: 'app/redemption/redemption.html',
                controller: 'RedemptionController',
                controllerAs: 'r',
                params: {
                    dmoId: null
                },
                resolve: {
                    dataSets: ['CatalogService', '$stateParams', '$q', function (CatalogService, $stateParams, $q) {
                        var deferred = $q.defer();
                        var dmoId = $stateParams.dmoId;
                        CatalogService.$loaded()
                            .then(function (data) {
                                if (data.$getRecord(dmoId) !== null) {
                                    $stateParams.exchange = data.$getRecord(dmoId);
                                    deferred.resolve(data.$getRecord(dmoId));
                                }
                            });
                        return deferred.promise;
                    }]
                }
            });
        //
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('homepage');
        });
    }
})();
