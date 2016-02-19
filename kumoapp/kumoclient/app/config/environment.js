/**
 *   app.environment
 *
 *   AnjularJs version 1.2.x
 *
 *   @category Config
 *
 *   @package  Config
 *
 *   @author   Kumo
 *
 *   @license  Kumo
 *
 *
 */

/**
 * Setting up the web service environment upon environment basis
 */
(function() {

    //Check which app is started
    var strEnvironmentObj = '';

    switch (window.location.host) {
        case "localhost":
            strEnvironmentObj = {
                'kumoApiUrl': 'http://192.168.10.40:4001/'
            };
            break;
        default:
            strEnvironmentObj = {
                'kumoApiUrl': 'http://192.168.10.40:4001/'
            };
            break;
    }

    //Environment related configration
    angular
        .module('config')
        .constant("ENV", strEnvironmentObj);
})();
