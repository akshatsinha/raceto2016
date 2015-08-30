'use strict';

angular.module('raceApp')
    .controller('StatesCtrl', function(statesSvc, EventDispatchingSvc, $scope) {
        var stsc = this;
        stsc.thumbnailView = true;
        stsc.tableView = false;

        angular.extend(stsc, new EventDispatchingSvc($scope));
        stsc.dispatch('title:update', 'Electoral Votes');

        stsc.viewType = function(view_id) {
            if (view_id === 0) {
                stsc.thumbnailView = true;
                stsc.tableView = false;
            }
            if (view_id === 1) {
                stsc.thumbnailView = false;
                stsc.tableView = true;
            }
        };

        statesSvc.getStatesNamesAndVotes()
            .success(function (response) {
                stsc.stateList = response;
            });



    });
