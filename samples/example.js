'use strict';
angular.module('appTest', ['ng-patterns'])
    .controller('appTestController', ['$scope', function ($scope) {

        $scope.n = [
            {
                'size': 50,
                'text': 'N',
                'colors': ['#e62aa2', '#f0b988']
            }
        ];
        $scope.g = [
            {
                'size': 10,
                'text': 'G',
                'colors': ['#3ce5a7', '#3cb7e5', '#e53c90']
            }
        ];
        $scope.p = [
            {
                'size': 15,
                'text': 'P',
                'colors': ['#7ec3f1', '#084974']
            }
        ];
        $scope.a = [
            {
                'size': 15,
                'text': 'A',
                'colors': ['#f21a70', '#df3ce5', '#f9bb69']
            }
        ];
        $scope.t = [
            {
                'size': 25,
                'text': 'T',
                'colors': ['#f21a70', '#2fd6d4', '#f9bb69']
            }
        ];

        $scope.e = [
            {
                'size': 10,
                'text': 'E',
                'colors': ['#f969e0', '#2fd6d4', '#f9bb69']
            }
        ];

        $scope.r = [
            {
                'size': 5,
                'text': 'R',
                'colors': ['#f21a70', '#2fd6d4', '#f9bb69']
            }
        ];

        $scope.n = [
            {
                'size': 12,
                'text': 'N',
                'colors': ['#f21a70', '#e5893c', '#f9bb69']
            }
        ];

        $scope.s = [
            {
                'size': 15,
                'text': 'S',
                'colors': ['#f21a70', '#2fd6d4', '#e53c90']
            }
        ];
    }]);
