'use strict';
angular.module('appTest', ['ng-patterns'])
    .controller('appTestController', ['$scope', function ($scope) {
        $scope.test1 = [
            {
                'size': 50,
                'seed': 'supercalifragilistico',
                'colors': ['#e62aa2', '#f0b988']
            }
        ];
        $scope.test2 = [
            {
                'size': 3,
                'colors': ['#78f03d', '#f03d78', '#f0e13d']
            }
        ];
        $scope.test3 = [
            {
                'size': 15,
                'colors': ['#7ec3f1', '#084974']
            }
        ];
        $scope.test4 = [
            {
                'size': 2,
                'colors': ['#cccbc1', '#979794', '#181816']
            }
        ];

    }]);
