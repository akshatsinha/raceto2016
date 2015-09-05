'use strict';

angular.module('raceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar/',
        templateUrl: 'app/calendar/calendar.html',
        controller: 'CalendarCtrl'
      })
      .state('repdebate', {
        url: '/calendar/2016-republican-party-debate/',
        templateUrl: 'app/calendar/republican_debate.html'
      })
      .state('demdebate', {
        url: '/calendar/2016-democratic-party-debate/',
        templateUrl: 'app/calendar/democratic_debate.html'
      })
      .state('iowa', {
        url: '/calendar/2016-iowa-caucus/',
        templateUrl: 'app/calendar/iowa_caucus.html'
      })
      .state('newhampshire', {
        url: '/calendar/2016-new-hampshire-primary/',
        templateUrl: 'app/calendar/new_hampshire_primary.html'
      })
      .state('southcarolina', {
        url: '/calendar/2016-south-carolina-primary/',
        templateUrl: 'app/calendar/south_carolina_primary.html'
      })
      .state('nevada', {
        url: '/calendar/2016-nevada-caucus/',
        templateUrl: 'app/calendar/nevada_caucus.html'
      });
  });
