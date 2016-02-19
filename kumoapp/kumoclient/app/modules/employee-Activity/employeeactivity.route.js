angular.module('employeeactivity.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/employee-activity', {
            templateUrl: 'modules/employee-Activity/views/employeeactivity.html',
            controller: 'employeeActivityCtrl'
        });
    }]);
