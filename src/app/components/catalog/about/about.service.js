(function () {
    'use strict';

    angular
        .module('app')
        .factory('CatalogAbout', ['$q', '$timeout', CatalogAbout]);

    function CatalogAbout($q, $timeout) {
        var output;

        output = {
            query: getQuery,
            get: getRow
        };

        return output;

        function getQuery() {
            return $q(function (resolve) {
                $timeout(function () {
                    resolve(dataCollection());
                }, 200);
            });
        }

        // Get $promise via get call
        function getRow(obj) {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    if (angular.isObject(obj)) {
                        var aboutCollection = dataCollection();
                        var dataResolved = [];
                        angular.forEach(aboutCollection, function (data) {
                            for (var prop in obj) {
                                if (data.hasOwnProperty(prop)) {
                                    if (data[prop] === obj[prop]) {
                                        dataResolved.push(data);
                                    }
                                }
                            }
                        });
                        resolve(dataResolved);
                    } else {
                        reject('Please provice an object for the get() query.');
                    }
                }, 200);
            });
        }

        function dataCollection() {
            return [{
                id: '136636452717qnkei',
                description: 'Emirates is the largest airline in the Middle East and is located in Dubai, United Arab Emirates. Owned and operated as a subsidiary of The Emirates Group, Emirates has more than 3,400 passenger flights a week from the main hub at Dubai International Airport. The Emirates Sky Cargo division heads all of the cargo flights. Flights go to more than 150 cities across the world in over 70 countries.'
            }, {
                id: '136636452746tkjpy',
                description: 'With Air France, KLM is at the forefront of the European airline industry. Offering reliability and a healthy dose of Dutch pragmatism, 32,000 KLM employees work to provide innovative products for our customers and a safe, efficient, service-oriented operation with a proactive focus on sustainability. KLM strives to achieve profitable growth that contributes to both its own corporate aims and to economic and social development.'
            }, {
                id: '136636452750hxysv',
                description: 'Asia Miles is a reward program for travelers flying with over 20 Asia Miles airline partners including Cathay Pacific and Dragonair. Customers earn miles by staying at hundreds of international hotels, eating in fine dining establishments, transportation and as well as from finance and insurance companies, Telecoms and other professional services. Once miles are earned, flight awards are redeemable on Asia Miles iRedeem, where members can earn a variety of lifestyle awards from gourmet restaurants, top-of-the-line trendy gadgets, exclusive events to other limited edition items. Customers also have the ability to donate miles charity or use them to bid at Asia Miles iAuction. Other awards include round-trip flights from Hong Kong to Los Angeles on Cathay Pacific, one-way upgrades to Business Class and one-night hotel stays. Asia Miles is a free program which only takes a few moments to enroll online.'
            }, {
                id: '136636452739lxnja',
                description: 'American Airline is one of the largest airlines in the world. It is also part of the AMR Corporation located in Fort Worth, Texas. On an average day American Airlines will fly about 3,400 flights carrying more than 275,000 passengers and over 300,000 pieces of luggage. They are a founding member of the global oneworld Alliance that unites 11 of the world’s largest airlines and affiliate carriers, allowing them to offer more benefits to customers and better customer service. Onworld serves 800 airports in about 150 countries with more than 8,750 daily departures. The American Airlines website allows customers to book flights, hotel stays, car rentals and provides other services such as travel information. The AAadvantage Program allows customers to accumulate points and receive bonus offers, book awards, redemption miles and elite status, which includes free upgrades and various discounts.'
            }, {
                id: '136636452700tocam',
                description: 'Being the national flag carrier and the largest Canadian airline, Air Canada is truly at the pinnacle of airline prestige. Since being founded in 1936, it now operates a massive fleet and charters air transport to 178 destinations worldwide, the ninth-largest number of destinations in the world. Presently, it is recognized as the Skytrax Best International Airline in North America as well as being ranked a 4-star Airline. Featuring cost-saving fares to Asia and Europe, Air Canada bridges the distance between dozens of major cities with splendid flights at great prices.'
            }, {
                id: '136636452761iotif',
                description: 'KrisFlyer is a member rewards program for frequent flyers of Singapore Airlines, SilkAir and any select airline partners associated with the Star Alliance network. There are over 170 partners of the network worldwide. Members of KrisFlyer can gain special benefits, such as exclusive deals and earn miles whenever they fly, stay, charge, book, call, drive or shop with any of the partners in the selected network. KrisFlyer miles can be redeemed for free flights in more than 170 countries.'
            }, {
                id: '136331781989pmdjr',
                description: 'Adidas is a premier German multinational sportswear designer and manufacturer. It is the largest sportswear manufacturer in Germany and the second largest in the world. Adidas as a brand is divided into three separate focuses - Adidas Performance (devoted to the athlete), Adidas Originals (focusing on fashion and lifestyle), and Style Essentials, which notably includes the Y-3 brand. Though Adidas is most well known for its sports footwear, the company also produces other products such as bags, shirts, watches, eyewear and other related goods. They are well known for their signature ‘three stripe’ emblem, which is a staple icon on all of their shoe and apparel designs, as well as being known as a forerunner for design and performance. Gift cards can be used for purchases in-store and online, and can include a touch of personalization with a message and choice of card design. Fans of easy, stylish yet practical apparel and accessories will surely adore an Adidas gift.'
            }, {
                id: '136331779225rsswv',
                description: 'There\'s no better way to get in touch with nature than hiking, but if you want to do the environment some good while you\'re at it, buy your hiking gear from Patagonia. They have GoreTex, down and fleece jackets aplenty for men and women, and tens of durable, waterproof hiking shoes, trainers and wading boots to choose from. Waterproof your gear with a Patagonia bag – all of them are big enough to hold a laptop, in addition to being padded. For warmth, Patagonia produces a wide selection of quick-drying and versatile poly-wool and recycled polyester shirts and thermal tights.'
            }, {
                id: '136331783047qeqei',
                description: 'Sephora is one of the world’s leading cosmetic and perfume retail stores. Sephora began in 1998 in New York City. Today, there are more than 1,700 Sephora retail stores in over 30 countries. The name “Sephora” comes from “sephos” (the Greek word for beauty) and the name Zipporah, who was Moses’ wife in the Book of Exodus. Sephora has over 100 cosmetics, skincare and make up brands sold in stores such as Urban Decay, Too Faced Cosmetics and Make Up For Ever.'
            }, {
                id: '136331780173ogyaw',
                description: 'What coffeeshop could be more ubiquitous than Starbucks? Tens of thousands of locations dot every street and mall, so there\'s no better a loyalty programme to join than Starbucks\' – with so many opportunities to spend, you\'d be at Gold level in no time. Gold level, by the way, is the highest level in Starbucks\' Rewards program, earning you a free drink or food of your choice.'
            }, {
                id: '136331783021jvuri',
                description: 'Omaha Steaks is a manufacturer and distributor of premium custom cut steaks, red meat and other gourmet foods. Serving more than 2 million active customers, they offer the finest USDA-approved, grain-fed beef that is naturally aged to ensure full flavor and tenderness. While their headquarters are in Omaha, Nebraska, they market internationally via foodservice, mail order, incentive, telesales, retail stores and restaurants and online sales. Omaha steaks is the largest small parcel direct shipper of gourmet foods in the US, with more than 400 items on its product line including pork, poultry, seafood, side dishes, appetizers, desserts and many other ready-to-serve and easy to prepare gourmet foods. Omaha Steaks are flash-frozen to capture the freshest flavors and shipped with dry ice in a reusable cooler—standard delivery is 7 business days or less, but express and overnight delivery options are also available for customers.'
            }, {
                id: '136331779734xomeh',
                description: 'JCPenney (sometimes called Penney’s) is one of the leading American department stores in the United States and it is well known for its suburban shopping mall presence. There are more than 1,100 JCPenney department stores in operation in the U.S. as well as Puerto Rico. Formerly a catalog shopping business, JCPenney is one of the largest apparel retailers for men and women with fashion trends that are unmatched in quality and value. Other than apparel, JCPenney also sells branded home furnishings and conventional merchandise. Some JCPenneys even have leased departments by famous companies such as Seattle’s Best Coffee and Sephora. The company also offers jewelry repair, gift cards and free shipping at JCPenney.com. With exclusive clothing brands such as Liz Claiborne, Guess Jeans and Polo, JCPenney is the preferred shopping destination today.'
            }, {
                id: '136331778896vguvt',
                description: '1960s California was the land of free spirits. The epicentre of both hippie and surf culture, the state had established itself as a centre for countercultural fashion. The same era spawned the Gap, originally a reseller of Levi\'s products, which then moved onto designing its own in 1974. Taking a cue from the time when casual reigned supreme, shoppers at the Gap can still find thousands of options to make their outfits effortlessly playful – whether it be washed out khakis or acid washed denim shirts.'
            }, {
                id: '136331780668gsffg',
                description: 'Toys"R"Us is the leading kids store for all toys, video games, dolls, action figures, learning games, building blocks and more. C\'mon, Let\'s Play!'
            }, {
                id: '140913276526rwfrt',
                description: 'Launched in 2000, LifeSpa is located at TripleOne Somerset, just steps from world-renowned Orchard Road, the heart of Singapore shopping. Spread over a space of 5000 sq. ft, this spa with its plush interiors, spacious treatment rooms and modern spa facilities brings tranquility to the hustle and bustle of city life. Over at the Carlton Hotel, LifeSpa PrestigeOne, located on level 5 has luxurious treatment rooms, hydrotherapy and steam room facilities is the perfect place for you to recharge and rejuvenate.'
            }];
        }
    }
})();