/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action(options) {
    this.mediaplayer = options.mediaplayer;
}

Action.prototype.run = function (parameters, solve) {
    this.mediaplayer.stop();
    this.mediaplayer.play(parameters['song']).then(function () {
        $.notify({ message: 'Change Song' }, { allow_dismiss: true, type: 'success' });
        solve({
            event: 'event-change-songdone',
            data: {
            }
        });
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
