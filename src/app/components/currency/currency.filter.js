(function () {
    'use strict';

    angular
        .module('app')
        .filter('catalogCurrency', ['GiiftStorage', catalogCurrency]);

    function catalogCurrency(GiiftStorage) {
        return function (input, currencyCode) {
            if (isNaN(input) || angular.isUndefined(currencyCode)) {
                return input;
            } else {
                var result;
                var currencies = GiiftStorage.getItem('currencyData');
                if (currencies.indexOf(currencyCode.toLowerCase()) !== -1) {
                    var format = OSREC.CurrencyFormatter.format(input, {
                        currency: currencyCode.toUpperCase(),
                        locale: 'en_US'
                    });
                    result = he.decode(format);
                } else {
                    result = input + ' ' + currencyCode;
                }
                return result;
            }
        };
    }
})();
