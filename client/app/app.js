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
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .factory('EventDispatchingSvc', function($rootScope) {
        function EventDispatchingSvc($scope) {
            var delisteners = [];
            if (!$scope) {
                throw new Error("A EventDispatchingSvc must have $scope to function. It wasn't found.");
            }
            this.dispatch = $rootScope.$emit.bind($rootScope);
            this.listen = function() {
                var args = Array.prototype.slice.call(arguments),
                    deListenFunc = $rootScope.$on.apply($rootScope, args);
                delisteners.push(deListenFunc);
                return deListenFunc;
            };
            $scope.$on('$destroy', function() {
                delisteners.forEach(function(deListenFunc) {
                    if (_.isFunction(deListenFunc)) {
                        deListenFunc.call();
                    }
                });
            });
        }
        return EventDispatchingSvc;
    })
    .factory('EnvSvc', function() {
        return {
            getEnv: function() {
                if (window.location.host.indexOf('localhost') === -1)
                    return 'http://raceto2016.com:9000/';
                else
                    return 'http://localhost:9000/';
            }
        };
    })
    .filter('num', function() {
        return function(input) {
            return parseInt(input, 10);
        };
    });
