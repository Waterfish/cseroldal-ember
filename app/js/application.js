(function (Ember, DS, Firebase, undefined) {
    'use strict';

    var Cseroldal = window.Cseroldal = Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: false,
        LOG_VIEW_LOOKUPS: false,
        LOG_ACTIVE_GENERATION: true,
        LOG_RESOLVER: false
    });

    // Cseroldal.ApplicationAdapter = DS.FixtureAdapter.extend();

    Cseroldal.ApplicationAdapter = DS.FirebaseAdapter.extend({
        firebase: new Firebase('https://cseroldal.firebaseio.com/')
    });

    // Cseroldal.ApplicationAdapter = DS.LSAdapter.extend({
    //   namespace: 'todos-emberjs'
    // });

    Cseroldal.ApplicationRoute = Ember.Route.extend({
        setupController: function(controller) {
            // `controller` is the instance of ApplicationController
            controller.set('title', 'Hello world!');
        }
    });

    Cseroldal.ApplicationController = Ember.Controller.extend({
        appName: 'My First Example'
    });

}(window.Ember, window.DS, window.Firebase));
