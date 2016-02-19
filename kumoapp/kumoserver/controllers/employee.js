"use strict";

var fs = require('fs');

module.exports = {
    employeeListCtrl: employeeListCtrl,
    employeeActivityCtrl: employeeActivityCtrl
};


function employeeListCtrl(request, reply) {

    fs.readFile('employee.json', function(err, buffer) {

        if (err) {
            // Handle error
            console.error(err.stack);
            return;
        }
        // try catch Example
        try {
            reply({
                'status': 1,
                'message': 'Employee list.',
                'data': JSON.parse(buffer)
            });
        } catch (err) {
            console.log("catch " + err);
        }

    });
}

function employeeActivityCtrl(request, reply) {
    fs.readFile('employeeactivity.json', function(err, buffer) {

        if (err) {
            // Handle error
            console.error(err.stack);
            return;
        }
        // try catch Example
        try {
            reply({
                'status': 1,
                'message': 'Employee list.',
                'data': JSON.parse(buffer)
            });
        } catch (err) {
            console.log("catch " + err);
        }

    });
}
