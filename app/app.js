angular.module('ngkiddemo', ['ngkidgrid'])
    .controller('myCtrl', ['$scope', '$interval', function myCtrl($scope, $interval) {
        $scope.people = [{
            name: 'Nick',
            age: 10
        }, {
            name: 'Mary',
            age: 2
        }, {
            name: 'Daniel',
            age: 5
        }, {
            name: 'Frenk',
            age: 8
        }];
        $scope.filter = 'number';
        $scope.callMe = function(p) {
            return p.name;
        };
        $scope.date = new Date();
        $interval(function() {
            $scope.date = new Date();
        }, 1000)
    }]);
