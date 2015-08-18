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
    .factory('statesSvc', function() {
        return {
            getStatesList: function() {
                return [
                    {'name': 'alabama', 'votes': '9'},
                    {'name': 'alaska', 'votes': '3'},
                    {'name': 'arizona', 'votes': '11'},
                    {'name': 'arkansas', 'votes': '6'},
                    {'name': 'california', 'votes': '55'},
                    {'name': 'colorado', 'votes': '9'},
                    {'name': 'connecticut', 'votes': '7'},
                    {'name': 'delaware', 'votes': '3'},
                    {'name': 'dc', 'votes': '3'},
                    {'name': 'florida', 'votes': '29'},
                    {'name': 'georgia', 'votes': '16'},
                    {'name': 'hawaii', 'votes': '4'},
                    {'name': 'idaho', 'votes': '4'},
                    {'name': 'illinois', 'votes': '20'},
                    {'name': 'indiana', 'votes': '11'},
                    {'name': 'iowa', 'votes': '6'},
                    {'name': 'kansas', 'votes': '6'},
                    {'name': 'kentucky', 'votes': '8'},
                    {'name': 'louisiana', 'votes': '8'},
                    {'name': 'maine', 'votes': '4'},
                    {'name': 'maryland', 'votes': '10'},
                    {'name': 'massachusetts', 'votes': '11'},
                    {'name': 'michigan', 'votes': '16'},
                    {'name': 'minnesota', 'votes': '10'},
                    {'name': 'mississippi', 'votes': '6'},
                    {'name': 'missouri', 'votes': '10'},
                    {'name': 'montana', 'votes': '3'},
                    {'name': 'nebraska', 'votes': '5'},
                    {'name': 'nevada', 'votes': '6'},
                    {'name': 'new hampshire', 'votes': '4'},
                    {'name': 'new jersey', 'votes': '14'},
                    {'name': 'new mexico', 'votes': '5'},
                    {'name': 'new york', 'votes': '29'},
                    {'name': 'north carolina', 'votes': '15'},
                    {'name': 'north dakota', 'votes': '3'},
                    {'name': 'ohio', 'votes': '18'},
                    {'name': 'oklahoma', 'votes': '7'},
                    {'name': 'oregon', 'votes': '7'},
                    {'name': 'pennsylvania', 'votes': '20'},
                    {'name': 'rhode island', 'votes': '4'},
                    {'name': 'south carolina', 'votes': '9'},
                    {'name': 'south dakota', 'votes': '3'},
                    {'name': 'tennessee', 'votes': '11'},
                    {'name': 'texas', 'votes': '38'},
                    {'name': 'utah', 'votes': '6'},
                    {'name': 'vermont', 'votes': '3'},
                    {'name': 'virginia', 'votes': '13'},
                    {'name': 'washington', 'votes': '12'},
                    {'name': 'west virginia', 'votes': '5'},
                    {'name': 'wisconsin', 'votes': '10'},
                    {'name': 'wyoming', 'votes': '3'}
                ];
            }
        };
    });
