'use strict';

angular.module('raceApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('states', {
                url: '/states/',
                templateUrl: 'app/states/states.html',
                controller: 'StatesCtrl'
            })
    })
    .factory('statesSvc', function($http) {
        return {
            getStatesList: function() {
                return $http.get('/api/states/');
            },
            getStatesNamesAndVotes: function() {
                return $http.get('/api/states/nameandvotes');
            },
            getStateResult: function(state) {
                return $http({
                    url: '/api/states/statsbystate',
                    method: 'GET',
                    params: {state: state}
                });
            }
        };
    });
