'use strict';

angular.module('raceApp')
    .controller('StateCtrl', function ($stateParams) {
        var stc = this;
        stc.state = $stateParams.state;
    })
    .controller('LeftStateListCtrl', function ($stateParams, statesSvc) {
        var lslc = this;
        lslc.stateMenuOpen = false;
        lslc.state = $stateParams.state;
        lslc.stateList = statesSvc.getStatesList();
        lslc.openStateMenu = function() {
            lslc.stateMenuOpen = !lslc.stateMenuOpen;
        }
    });
