/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'event-change-songdone': require('./event-change-songdone').createNavigation(options),
        'event-start-song-done': require('./event-start-song-done').createNavigation(options),
        'event-stop-song-done': require('./event-stop-song-done').createNavigation(options),
        'selected-song': require('./selected-song').createNavigation(options),
        'event-play': require('./event-play').createNavigation(options),
        'event-stop': require('./event-stop').createNavigation(options),
    };
};
