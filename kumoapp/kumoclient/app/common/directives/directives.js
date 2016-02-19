angular.module('directives.common', [])
    .directive("pagination", function() {

        return {
            restrict: "E",
            scope: {
                "employeeList": "="
            },
            templateUrl: "modules/common-views/pagination.html",
            link: function(scope, element, attrs) {
                scope.currentPage = 1;
                scope.employeeListPerPage = 3;
                scope.stratRange = 0;
                scope.endRange = 3;
                scope.employeeListDup = scope.employeeList;

                scope.pageCount = Math.ceil(scope.employeeList.length / scope.employeeListPerPage);

                scope.range = function() {
                    var createRange = [];

                    for (var i = 0; i < scope.pageCount; i++) {
                        createRange.push(i);
                    }

                    return createRange;
                };

                //set 1st time after calling pagination
                scope.employeeList = scope.employeeListDup.slice(scope.stratRange, scope.endRange);

                scope.setData = function(pageNumber, action) {

                    if (action == 'prev') {
                        //if user clicks prev button
                        scope.currentPage = pageNumber - 1;
                        scope.stratRange = scope.currentPage * scope.employeeListPerPage - scope.employeeListPerPage;
                        scope.endRange = scope.currentPage * scope.employeeListPerPage;
                    } else {
                        //if user clicks next button
                        scope.currentPage = pageNumber + 1;
                        scope.stratRange = scope.currentPage * scope.employeeListPerPage - scope.employeeListPerPage;
                        scope.endRange = scope.stratRange + scope.employeeListPerPage;
                    }

                    //update list page wise
                    scope.employeeList = scope.employeeListDup.slice(scope.stratRange, scope.endRange);
                };
            }
        };
    });
