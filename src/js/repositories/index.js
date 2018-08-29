/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    return {
    'songs': require('./songs').createRepository(options),
    };
};
