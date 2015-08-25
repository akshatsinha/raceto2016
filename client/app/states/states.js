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
                return $http.get('http://raceto2016:9000/api/states/');
            },
            getStatesNamesAndVotes: function() {
                return $http.get('http://raceto2016:9000/api/states/nameandvotes');
            },
            getStateResult: function(state) {
                return $http({
                    url: 'http://raceto2016:9000/api/states/statsbystate',
                    method: 'GET',
                    params: {state: state}
                });
            }
        };
    });
