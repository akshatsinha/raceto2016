'use strict';

angular.module('raceApp')
    .run(function($state) {
        $state.transitionTo('repdebate');
    })
    .controller('CalendarLeftCtrl', function(EventDispatchingSvc, $scope) {
        var clc = this;
        angular.extend(clc, new EventDispatchingSvc($scope));

        clc.dispatch('title:update', 'Calendar');
        clc.dispatch('schedule:clicked', 'repdebate');

        clc.clickedSchedule = function(sched_clicked) {
            clc.dispatch('schedule:clicked', sched_clicked);
        };

    })
    .controller('CalendarCtrl', function(EventDispatchingSvc, $scope, $state) {
        var cal = this;
        angular.extend(cal, new EventDispatchingSvc($scope));
        cal.schedule_content = '';

        cal.listen('schedule:clicked', function (event, schedule) {
            $state.transitionTo(schedule);
            //cal.include = 'components/navbar/navbar.html';
        });


    });

