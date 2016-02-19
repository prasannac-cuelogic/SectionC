"use strict";

var controller = require('../controllers/employee');

module.exports = [{
    method: 'GET',
    path: '/employeelist',
    handler: controller.employeeListCtrl
}, {
    method: 'GET',
    path: '/employeeactivity',
    handler: controller.employeeActivityCtrl
}];
