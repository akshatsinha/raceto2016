'use strict';

angular.module('raceApp')
  .controller('StateCtrl', function ($stateParams) {
    var stc = this;
    stc.state = $stateParams.state;
  });
