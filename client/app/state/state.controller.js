'use strict';

angular.module('raceApp')
    .controller('StateCtrl', function ($scope, $stateParams, statesSvc, _, EventDispatchingSvc) {

        function convertStringToNumber(input) {
            return parseInt(input.replace(/,/g, ''));
        }

        var stc = this;
        angular.extend(stc, new EventDispatchingSvc($scope));
        stc.state = $stateParams.state;
        stc.dispatch('title:update', stc.state.toUpperCase());

        statesSvc.getStatesList()
            .success(function (response) {
                if (_.contains(response, stc.state) == false)
                    window.location.href = "/";
                else {
                    statesSvc.getStateResult($stateParams.state)
                    .success(function (response) {
                        stc.stateInfo = response;
                        //console.log(response);
                        // Add the common chart elements to the chart object
                        _(stc.stateInfo.past_results).forEach(function(elem) {
                            elem.labels = ['Dem', 'GOP'];
                            elem.colours = ['#0000FF', '#FF0000'];
                            elem.options = {animateRotate: false};
                            elem.winner = [false, true];
                            if (convertStringToNumber(elem.popular_vote[0]) > convertStringToNumber(elem.popular_vote[1]))
                                elem.winner = [true, false];
                        });
                    });
                }
            });
    })
    .controller('LeftStateListCtrl', function ($stateParams, statesSvc) {
        var lslc = this;
        lslc.stateMenuOpen = false;
        lslc.state = $stateParams.state;
        lslc.mobileDevice = false;

        if (window.screen.width <= 420)
            lslc.mobileDevice = true;

        statesSvc.getStatesList()
            .success(function (response) {
                lslc.stateList = response;
            });
        lslc.openStateMenu = function() {
            lslc.stateMenuOpen = !lslc.stateMenuOpen;
        }
    });
