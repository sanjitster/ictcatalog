(function () {
    'use strict';

    angular
        .module('app')
        .constant('firebaseCredentials', {
            apiKey: 'AIzaSyA5GnsIJC0oBn3g-kI_YD0XuGbqY-DU_U8',
            authDomain: 'ict201-6b3fb.firebaseapp.com',
            databaseURL: 'https://ict201-6b3fb.firebaseio.com',
            projectId: 'ict201-6b3fb',
            storageBucket: 'ict201-6b3fb.appspot.com',
            messagingSenderId: '307692509221'
        })
        .constant('countryList', [
            'CA',
            'US',
            'SG'
        ])
        .constant('uuid', '7319aadc-0229-11e7-93ae-92361f002671');
})();
