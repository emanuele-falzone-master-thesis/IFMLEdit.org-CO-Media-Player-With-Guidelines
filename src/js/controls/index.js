/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    require('./main-application').register();
    require('./c-view-container-application').register();
    require('./c-view-container-xor-player').register();
    require('./c-list-songs').register();
    require('./c-view-container-stopped').register();
    require('./c-view-container-playing').register();
    require('./c-details-player-stopped').register();
    require('./c-details-player-playing').register();
};
