(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomepageController', [HomepageController]);

    function HomepageController() {
        var vm = this;
        vm.myInterval = 4000;
        vm.noWrapSlides = false;
        vm.active = 0;
        var slides = vm.slides = [];
        var currIndex = 0;

        vm.addSlide = function () {
            var newWidth = 1900 + slides.length + 1;
            slides.push({
                image: '//unsplash.it/' + newWidth + '/1200/?random',
                text: ['Digital Gift Card Rewards', 'Get Credit Back', 'Measure Everything', 'Control Delivery'][slides.length % 4],
                desc: ['Supercharge the way you buy digital gift cards.', 'You get credit for the gift cards people don’t use.', 'Get all the data, reports and stats you need.', 'Email gift cards from our system or download your order as a set of links to deliver yourself.'][slides.length % 4],
                id: currIndex++
            });
        };

        vm.randomize = function () {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            vm.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }
            return array;
        }
    }
})();
