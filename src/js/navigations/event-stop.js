/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'song' : data['id'],
        };
        var promise = context.actions['action-stop-song']({filters: packet});
        context.runningActionsByContainer['view-container-playing'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-playing'].splice(
                context.runningActionsByContainer['view-container-playing'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
