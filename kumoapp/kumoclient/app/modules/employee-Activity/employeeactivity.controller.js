angular.module('employeeactivity.controller', [])
    .controller('employeeActivityCtrl', ['$scope', 'employeeFact', EmployeeActivityController])

function EmployeeActivityController($scope, employeeFact) {
    $scope.sortValue = "id";
    $scope.reverse = false;

    /**
     * getEmployeeList get employee list
     * @return employee records
     */
    $scope.employeeActivity = function() {
        employeeFact.getEmployeeActivity()
            .then(function(response) {
                if (response.data.data) {
                    $scope.employeeActivity = response.data.data.employeeActivity;
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    /**
     * END employeeActivity
     */

     /**
     * sortRecord sort record
     * @param  string getValue get sorting value
     * @return setclass and sort value
     */
    $scope.sortRecord = function(getValue) {

            if ($scope.sortValue === getValue) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.sortValue = getValue;
                $scope.reverse = false;
            }
            //check value and set class
            if ($scope.sortValue == 'id') {
                $scope.arrowIdCls = ($scope.reverse) ? "dropup" : '';
            } else if ($scope.sortValue == 'name') {
                $scope.arrowNameCls = ($scope.reverse) ? "dropup" : '';
            }
            //End
        }
        /**
         * END sortRecord
         */
};
