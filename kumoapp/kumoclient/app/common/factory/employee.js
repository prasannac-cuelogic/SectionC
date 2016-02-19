angular.module('employee.factory', [])
    .factory('employeeFact', ['$http', employeeFact]);



function employeeFact($http) {

    var empFactory = {};

    function getEmployeeList() {
        return $http({
            method: "GET",
            url: "http://192.168.10.40:4001/" + "employeelist",
        });
    }

    function getEmployeeActivity() {
        return $http({
            method: "GET",
            url: "http://192.168.10.40:4001/" + "employeeactivity",
        });
    }

    empFactory.getEmployeeList = getEmployeeList;
    empFactory.getEmployeeActivity = getEmployeeActivity;
    return empFactory;
};
