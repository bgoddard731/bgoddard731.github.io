'use strict';

angular
    .module('app.admin')
    .factory("adminService", adminService);

adminService.$inject = ['adminResource'];

function adminService (adminResource) {

    return {
        verifyPassword: verifyPassword
    };

    function verifyPassword(password) {
        console.log('verifying password: ' + password);
        return adminResource.addApplicant(password).$promise;
    }

    // function changePassword(password) {
    //     console.log('Setting new Password ' + password);
    //     return adminResource.addApplicant({applicantId: applicantId}).$promise;
    // }

}
