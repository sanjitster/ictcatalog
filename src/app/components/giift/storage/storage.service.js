(function () {
    'use strict';

    angular
        .module('app')
        .constant('sessionId', new Date().getUTCMilliseconds())
        .factory('GiiftStorage', ['$localStorage', 'sessionId', 'uuid', GiiftStorage]);

    function GiiftStorage($localStorage, sessionId, uuid) {
        var exports;

        exports = {
            setItem: setItem,
            getItem: getItem,
            removeItem: removeItem
        };

        return exports;

        /**
         * Set $localStorage value with unique key
         * @param {*} key
         * @param {*} value
         */
        function setItem(key, value) {
            if (angular.isDefined(key) && key !== '') {
                var newKey = getUuid() + '-' + key;
                if (this.getItem(key) === null || angular.isUndefined(this.getItem(key))) {
                    var b = {};
                    b[newKey] = value;
                    $localStorage.$default(b);
                } else {
                    $localStorage[newKey] = value;
                }
            }
        }

        /**
         * Get and return $localStorage value from key
         * @param {*} key
         */
        function getItem(key) {
            var newKey = getUuid() + '-' + key;
            return $localStorage[newKey];
        }

        /**
         * Get and return $localStorage value from key
         * @param {*} key
         */
        function removeItem(key) {
            var newKey = getUuid() + '-' + key;
            delete $localStorage[newKey];
        }

        /**
         * Get App UUID constant or return service unique sessionId
         */
        function getUuid() {
            if (angular.isDefined(uuid) && uuid !== '') {
                return uuid;
            }
            return sessionId;
        }

    }
})();