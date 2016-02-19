angular.module('employee.controller', [])
    .controller('employeeCtrl', ['$scope', 'employeeFact', '$window', EmployeeController])

function EmployeeController($scope, employeeFact, $window) {
    $scope.sortValue = "id";
    $scope.reverse = false;
    $scope.arrowIdCls = '';
    $scope.arrowNameCls = '';
    $scope.arrowDepartmentCls = '';
    $scope.arrowSalaryCls = '';
    $scope.arrowExperienceCls = '';

    /**
     * employeeList get employee list
     * @return employee records
     */
    $scope.employeeList = function() {
            employeeFact.getEmployeeList()
                .then(function(response) {
                    if (response.data.data) {
                        $scope.employeeDetails = response.data.data.employeeDetails;
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
        /**
         * END employeeList
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
            } else if ($scope.sortValue == 'department') {
                $scope.arrowDepartmentCls = ($scope.reverse) ? "dropup" : '';
            } else if ($scope.sortValue == 'salary') {
                $scope.arrowSalaryCls = ($scope.reverse) ? "dropup" : '';
            } else if ($scope.sortValue == 'experience') {
                $scope.arrowExperienceCls = ($scope.reverse) ? "dropup" : '';
            }
            //End
        }
        /**
         * END sortRecord
         */

    $scope.deleteEmployee = function(getEmpId) {

        if ($window.confirm("Are you sure you want to delete the employee?")) {
            //remove detail using main id
            var index = $scope.employeeDetails.indexOf(getEmpId);
            $scope.employeeDetails.splice(index, 1);
        }
    }


};
