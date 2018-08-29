/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout'),
    repositories = require('./repositories'),
    controls = require('./controls'),
    navigations = require('./navigations'),
    actions = require('./actions'),
    mediaplayer = require('./mediaplayer'),
    Promise = require('bluebird');

Promise.config({cancellation: true});

controls.register();
// TODO: register any custom control

function ApplicationViewModel() {
    // TODO: initialize global state
    var repos = repositories.createRepositories({}),
        player = mediaplayer.createMediaPlayer({repositories: repos});
    this.context = {
        repositories: repos,
        navigations: navigations.createNavigations({}),
        actions: actions.createActions({repositories: repos, mediaplayer: player}),
        mediaplayer: player,
        vms: {},
        runningActionsByContainer: {}
    };
}

var application = new ApplicationViewModel();

ko.applyBindings(application);

application.context.top.init();
