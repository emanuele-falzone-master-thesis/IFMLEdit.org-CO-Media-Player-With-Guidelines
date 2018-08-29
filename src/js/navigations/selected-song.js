/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'song' : data['id'],
        };
        var promise = context.actions['action-change-song']({filters: packet});
        context.runningActionsByContainer['view-container-application'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-application'].splice(
                context.runningActionsByContainer['view-container-application'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
