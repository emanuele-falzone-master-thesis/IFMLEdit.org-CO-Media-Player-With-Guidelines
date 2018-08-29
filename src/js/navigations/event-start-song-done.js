/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['view-container-application']) {
            context.top.active('view-container-application');
            context.vms['view-container-application'].init({mask: 'view-container-xor-player'});
        }
        if (!context.vms['view-container-playing']) {
            context.vms['view-container-xor-player'].active('view-container-playing');
            context.vms['view-container-playing'].init({mask: 'details-player-playing'});
        }
        context.vms['details-player-playing'].init();
    };
};
