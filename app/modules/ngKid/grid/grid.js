angular.module('ngkidgrid', [])
    .directive('ngKidGrid', function() {
        return {
            restrict: 'EA',
            replace: false,
            templateUrl: 'app/modules/ngKid/grid/grid.html',
            controller: ['$scope', function($scope) {
                $scope.width = "50px";
                $scope.columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                $scope.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            }],
            link: {
                post: function(scope, element) {
                    var head = $('.pi-gr-hd', element);
                    var body = $('.pi-gr-bd', element);

                    // sync scroll of body with head 
                    body.unbind('scroll');
                    body.bind('scroll', function() {
                        head.css('left', -body.scrollLeft());
                    });

                    //resizable columns
                    $('.pi-gr-col').resizable();
                }
            }
        };
    }); // todo: col directiove