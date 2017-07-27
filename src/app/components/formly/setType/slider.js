(function () {
    'use strict';

    angular
        .module('app')
        .run(['formlyConfig', sliderFormly]);

    function sliderFormly(formlyConfig) {
        formlyConfig.setType({
            name: 'slider',
            template: ['<rzslider rz-slider-model="model[options.key]"' +
                ' rz-slider-options="to.sliderOptions"></rzslider>'
            ].join(' '),
            wrapper: ['bootstrapLabel', 'bootstrapHasError']
        });
    }
})();
