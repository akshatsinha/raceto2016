'use strict';

angular.module('raceApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'timer',
        'chart.js'
    ])
    .value('_', window._)
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .filter('num', function() {
        return function(input) {
            return parseInt(input, 10);
        };
    });
