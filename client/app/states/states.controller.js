'use strict';

angular.module('raceApp')
    .controller('StatesCtrl', function(statesSvc) {
        var stsc = this;
        statesSvc.getStatesNamesAndVotes()
            .success(function (response) {
                stsc.stateList = response;
            });
    });
