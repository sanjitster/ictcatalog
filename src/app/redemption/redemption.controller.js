(function () {
    'use strict';

    angular
        .module('app')
        .controller('RedemptionController', ['$state', 'alertService', '$filter', 'dataSets', 'BuyService', RedemptionController]);

    function RedemptionController($state, alertService, $filter, dataSets, BuyService) {
        var vm = this;

        if (angular.isUndefined(dataSets) || dataSets === '') {
            $state.go('dashboard');
        }

        vm.exchange = dataSets;
        vm.buyFormModel = {};
        vm.buyFormFields = [{
            key: 'name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: '',
                placeholder: 'Enter your name',
                required: true
            }
        }, {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: '',
                placeholder: 'Enter email',
                required: true
            }
        }, {
            key: 'amounts',
            type: 'multiCheckbox',
            className: 'multi-check',
            controller: ['$scope', '$filter', function ($scope, $filter) {
                $scope.to.options = [{
                    name: 'ALL',
                    value: 'ALL'
                }];
                angular.forEach(dataSets.amount.values, function (value) {
                    $scope.to.options.push({
                        name: $filter('catalogCurrency')(value, dataSets.unit),
                        value: value
                    });
                });
            }],
            templateOptions: {
                label: 'Select Amounts:',
                options: [{
                    'name': 'ALL',
                    'value': 'ALL'
                }],
                onClick: function ($modelValue, fieldOptions, scope) {
                    var newValue;
                    var options = fieldOptions.templateOptions.options;
                    var isAllChecked = $modelValue.indexOf('ALL') > -1;

                    if (scope.$index === 0) {
                        if (isAllChecked) {
                            newValue = getAllValues();
                        } else {
                            newValue = [];
                        }
                    } else {
                        if (isAllChecked && $modelValue.length < options.length) {
                            // unchecks 'ALL' if not every option is selected.
                            newValue = $modelValue.filter(function (value) {
                                return value !== 'ALL';
                            });
                        } else if (!isAllChecked && $modelValue.length === options.length - 1) {
                            // checks 'ALL' if every other option is selected
                            newValue = getAllValues();
                        }
                    }
                    if (newValue) {
                        fieldOptions.value(newValue);
                    }
                    function getAllValues() {
                        return options.map(function (option) {
                            return option.value;
                        });
                    }
                },
                required: true
            }
        }];

        vm.sendCard = function () {
            vm.isDisabled = true;
            var formData = vm.buyFormModel;
            var buy = BuyService;

            // Save and handle response
            buy.$add(formData).then(function () {
                vm.isDisabled = false;
                vm.buyFormOptions.resetModel();
                alertService.Add({
                    type: 'success',
                    msg: 'Congratulations, your card buy is being processed! You will receive an email to confirm the transaction and enter your program credentials',
                    timeout: 6000
                });
            }, function () {
                vm.isDisabled = false;
                vm.buyFormOptions.resetModel();
                alertService.Add({
                    type: 'danger',
                    msg: 'An error occured!',
                    timeout: 6000
                });
            });
        };
    }
})();
