angular.module('employee.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/employee-list', {
            templateUrl: 'modules/employee/views/employeelist.html',
            controller: 'employeeCtrl'
        });
    }]);
