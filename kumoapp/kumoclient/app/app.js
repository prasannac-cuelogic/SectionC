'use strict';

// Declare app level module which depends on views, and components
angular.module('kumo', [
    'ngRoute',
    'factory',
    'employee',
    'employeeactivity',
    'directives'
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({
        redirectTo: '/'
    }).
    when('/', {
        templateUrl: 'modules/common-views/404.html'
    })
}]);
