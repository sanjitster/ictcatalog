(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', ['$scope', 'GiiftStorage', '$stateParams', 'countryList', 'CatalogService', DashboardController]);

    function DashboardController($scope, GiiftStorage, $stateParams, countryList, CatalogService) {
        var vm = this;
        vm.numberToDisplay = 10;

        // Pre selected values
        vm.filterFormModel = {
            countries: $stateParams.countryId || '',
            slider: 50
        };

        // Build filter form
        vm.filterFormFields = [{
            className: 'row',
            fieldGroup: [{
                className: 'col-xs-12',
                type: 'input',
                key: 'dmoname',
                templateOptions: {
                    placeholder: 'Search Programs Names'
                }
            }, {
                key: 'countries',
                className: 'col-xs-12',
                type: 'select',
                templateOptions: {
                    key: 'filterCountry',
                    options: [],
                    valueProp: 'value',
                    labelProp: 'name',
                    placeholder: 'Select Country'
                },
                controller: ['$scope', 'CountryService', 'GiiftStorage', function ($scope, CountryService, GiiftStorage) {
                    $scope.to.options = [{
                        name: 'Select Country',
                        value: ''
                    }];
                    var countriesData = [];
                    var currencyData = [];
                    var countries = CountryService;
                    countries.$loaded()
                        .then(function (data) {
                            angular.forEach(data, function (countries) {
                                if (countryList.indexOf(countries.countryCode) !== -1) {
                                    countriesData.push({
                                        name: countries.countryName,
                                        value: countries.countryCode
                                    });
                                    currencyData.push(countries.currencyCode.toLowerCase());
                                }
                            });
                            GiiftStorage.setItem('currencyData', currencyData);
                            $scope.to.options = $scope.to.options.concat(countriesData);
                        });
                    return countries;
                }]
            }, {
                key: 'slider',
                className: 'col-xs-12',
                type: 'slider',
                templateOptions: {
                    label: 'Available Card Amounts:',
                    sliderOptions: {
                        floor: 25,
                        ceil: 100,
                        step: 25,
                        showTicks: 25
                    }
                }
            }]
        }];

        // Catalog Dataset
        var catalog = CatalogService;
        catalog.$loaded()
            .then(function (data) {
                vm.exchanges = data;
            });

        // Trigger to load more exchanges
        vm.loadMore = function () {
            if (angular.isDefined(vm.exchanges) && vm.exchanges !== null) {
                if (vm.numberToDisplay + 3 < vm.exchanges.length) {
                    vm.numberToDisplay += 3;
                } else {
                    vm.numberToDisplay = vm.exchanges.length;
                }
            }
        };
    }
})();
