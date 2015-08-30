'use strict';

angular.module('raceApp')
    .controller('MainCtrl', function($scope, $http) {

    })
    .controller('TitleCtrl', function($scope, EventDispatchingSvc) {
        var         tc = this,
            page_title = '';
        angular.extend(this, new EventDispatchingSvc($scope));
        tc.listen('title:update', function (event, title) {
            page_title = title + ' | RaceTo2016.com';
            $('title').text(page_title);
        });
    });
