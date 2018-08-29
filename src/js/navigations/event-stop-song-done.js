/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['view-container-application']) {
            context.top.active('view-container-application');
            context.vms['view-container-application'].init({mask: 'view-container-xor-player'});
        }
        if (!context.vms['view-container-stopped']) {
            context.vms['view-container-xor-player'].active('view-container-stopped');
            context.vms['view-container-stopped'].init({mask: 'details-player-stopped'});
        }
        context.vms['details-player-stopped'].init();
    };
};
