(function() {
    'use strict';

    angular
        .module('app')
        .factory('alertService', ['$rootScope', '$timeout', '$sce', '$filter', alertService]);

    function alertService($rootScope, $timeout, $sce, $filter) {
        var exports;
        $rootScope.alerts = [];

        exports = {
            factory: factory,
            Add: addAlert,
            Close: closeAlert,
            CloseAlert: closeAlertByIndex
        };

        return exports;

        function factory(alertOptions) {
            return $rootScope.alerts.push({
                type: alertOptions.type,
                msg: $sce.trustAsHtml(alertOptions.msg),
                message: alertOptions.msg,
                id: alertOptions.alertId,
                timeout: alertOptions.timeout,
                close: function() {
                    return exports.CloseAlert(this);
                }
            });
        }

        function addAlert(alertOptions) {
            alertOptions.alertId = (angular.isUndefined(alertOptions.id)) ? alertOptions.id : Date.now();
            alertOptions.message = alertOptions.msg;
            var that = this;
            this.factory(alertOptions);
            if (alertOptions.timeout > 0) {
                $timeout(function() {
                    that.Close(alertOptions.alertId);
                }, alertOptions.timeout);
            }
        }

        function closeAlert(id) {
            var alert = $filter('getById')($rootScope.alerts, id);
            return this.CloseAlert(alert);
        }

        function closeAlertByIndex(index) {
            if (angular.isUndefined(index)) return;
            var alert = $filter('getById')($rootScope.alerts, index);
            return $rootScope.alerts.splice(alert, 1);
        }
    }
})();