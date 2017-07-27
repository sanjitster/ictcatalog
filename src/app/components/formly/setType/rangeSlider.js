(function () {
    'use strict';

    angular
        .module('app')
        .run(['formlyConfig', rangeSlider]);

    function rangeSlider(formlyConfig) {
        formlyConfig.setType({
            name: 'range-slider',
            template: ['<rzslider rz-slider-model="model[options.key].low"' +
                'rz-slider-high="model[options.key].high" ' +
                'rz-slider-options="to.sliderOptions"></rzslider>'
            ].join(' '),
            wrapper: ['bootstrapLabel', 'bootstrapHasError']
        });
    }
})();
