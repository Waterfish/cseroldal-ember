(function (Ember, DS, Firebase, undefined) {
    'use strict';

    // http://emberjs.com/api/classes/Ember.Application.html
    var Cseroldal = window.Cseroldal = Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: false,
        LOG_VIEW_LOOKUPS: false,
        LOG_ACTIVE_GENERATION: true,
        LOG_RESOLVER: false,

        ready: function() {
            // register AuthController factory (as a singleton)
            this.register('main:auth', Cseroldal.AuthController);
            this.inject('route', 'auth', 'main:auth');
            this.inject('controller', 'auth', 'main:auth');
        },

        customEvents: {
            // add support for the paste event
        }
    });


    // Cseroldal.ApplicationAdapter = DS.FixtureAdapter.extend();
    Cseroldal.FirebaseUserPath = 'https://cseroldal.firebaseio.com/';
    Cseroldal.FirebaseRef = new Firebase('https://cseroldal.firebaseio.com/');

    Cseroldal.ApplicationAdapter = DS.FirebaseAdapter.extend({
        firebase: Cseroldal.FirebaseRef
    });

    // Cseroldal.ApplicationAdapter = DS.LSAdapter.extend({
    //   namespace: 'todos-emberjs'
    // });

    Cseroldal.ApplicationRoute = Ember.Route.extend({

        actions: {
            login: function() {
                this.get('auth').login();
            },

            logout: function() {
                this.get('auth').logout();
            }
        },

        setupController: function(controller) {
            // `controller` is the instance of ApplicationController
            controller.set('title', 'Hello world!');
        }
    });

    Cseroldal.ApplicationController = Ember.Controller.extend({
        appName: 'My First Example'
    });

}(window.Ember, window.DS, window.Firebase));
