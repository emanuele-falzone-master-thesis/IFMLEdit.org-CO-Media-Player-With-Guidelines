/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action(options) {
    this.mediaplayer = options.mediaplayer;
}

Action.prototype.run = function (parameters, solve) {
    this.mediaplayer.stop();
    $.notify({message: 'Stop Song'}, {allow_dismiss: true, type: 'success'});
    solve({
        event: 'event-stop-song-done',
        data: {
        }
    });
};

exports.createAction = function (options) {
    var action = new Action(options);
    return function (data) {
        return new Promise(function (solve, reject, onCancel) {
            var parameters = (data && data.filters) || {};
            action.run(parameters, solve, onCancel);
        });
    };
};
