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

        setupController: function(/*controller*/) {
            // `controller` is the instance of ApplicationController
            // controller.set('title', 'Hello world!');
        }
    });

    Cseroldal.ApplicationController = Ember.Controller.extend({

        // appName: 'My First Example',

        userStatusChanged: function () {

            var _this = this,
                loginData = this.get('auth.loginData');

            if (!loginData) {
                // logged out
                this.set('auth.currentUser', null);
                this.transitionToRoute('login');
                return;
            }

            // logged in
            this.store.find('auth', loginData.uid)
            .then(function (auth) {

                if (auth && !auth.get('isPending')) {

                    _this.set('auth.currentUser', auth.get('user'));

                } else {
                    console.log('Missing user or still pending');
                    _this.transitionToRoute('/');
                }


                var previousTransition = _this.get('auth.transition');
                // if you were trying to get somewhere, try again
                if (previousTransition) {

                    Ember.Logger.log('Retrying route `%@`.'.fmt(previousTransition.targetName));

                    if (previousTransition.targetName === _this.get('currentPath')) {
                        _this.send('refreshRoute');
                    } else {
                        previousTransition.retry();
                    }

                }

                else if (_this.get('currentPath') === 'login') {
                    _this.transitionToRoute('/');
                }

            });

          }.observes('auth.loginData')
    });

}(window.Ember, window.DS, window.Firebase));
