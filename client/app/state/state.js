'use strict';

angular.module('raceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('state', {
        url: '/state/:state/',
        templateUrl: 'app/state/state.html',
        controller: 'StateCtrl'
      });
  });
