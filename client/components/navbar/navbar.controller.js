'use strict';

angular.module('raceApp')
    .controller('NavbarCtrl', function($scope, $location) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }, {
            'title': 'States',
            'link': '/states/'
        }];

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
            if (route !== '/')
                return ($location.path().indexOf(route) > -1);
            else
                return (route === $location.path());
        };
    });
