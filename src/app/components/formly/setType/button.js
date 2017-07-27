(function () {
    'use strict';

    angular
        .module('app')
        .run(['formlyConfig', formlyBtn]);

    function formlyBtn(formlyConfig) {
        formlyConfig.setType({
            name: 'button',
            template: '<button class="{{to.class}}" ng-click="to.method()"><span ng-if="to.glyphicon" class="glyphicon {{to.glyphicon}}"></span> {{to.label}}</button>'
        });
    }
})();