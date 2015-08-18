'use strict';

angular.module('raceApp')
    .controller('StatesCtrl', function(statesSvc) {
        var stsc = this;
        stsc.stateList = statesSvc.getStatesList();
    });
