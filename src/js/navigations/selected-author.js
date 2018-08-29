/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-application']) {
            context.top.active('view-container-application');
            context.vms['view-container-application'].init({mask: 'list-songs'});
        }
        data = data || {};
        var packet = {
            'author' : data['id'],
        };
        context.vms['list-songs'].init({input: packet});
    };
};
