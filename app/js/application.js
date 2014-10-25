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

        actions: {
            refreshRoute: function () {
                alert('refreshRoute');
            }
        },

        userStatusChanged: function () {

            var _this = this,
                loginData = this.get('auth.loginData');

            if (!loginData) {
                // logged out
                this.set('auth.currentUser', null);
                this.set('auth.security', null);
                this.set('auth.authed', false);
                this.transitionToRoute('login');
                return;
            }

            // logged in
            this.store.find('auth', loginData.uid)
            .then(function (auth) {

                _this.set('auth.authed', true);

                if (auth) {

                    auth.get('user')
                        .then(function (user) {
                            _this.set('auth.currentUser', user);

                            if (user.get('group')) {

                                user.get('group').then(function (group) {

                                    Cseroldal.FirebaseRef.child('security/groups/' + group.get('id'))
                                        .on('value', function (snapshot) {
                                            _this.set('auth.security', snapshot.val());
                                        }, function (errorObject) {
                                            console.log('The read failed: ' + errorObject.code);
                                        });
                                });
                            } else {
                                console.log('group not set');
                            }

                        });


                } else {
                    Ember.Logger.log('Missing user or still pending');
                    _this.transitionToRoute('/pending');
                }

                var previousTransition = _this.get('auth.transition');
                // if you were trying to get somewhere, try again
                if (previousTransition) {

                    // Ember.Logger.log('Retrying route `%@`.'.fmt(previousTransition.targetName));

                    if (previousTransition.targetName === _this.get('currentPath')) {
                        _this.send('refreshRoute');
                    } else {
                        previousTransition.retry();
                    }

                } else if (_this.get('currentPath') === 'login') {
                    _this.transitionToRoute('/');
                }

            }, function(reason) {
                // the reason why you have no json
                _this.store.find('pendingAuth', loginData.uid)
                    .then(function (auth) {
                        _this.transitionToRoute('pending');
                    }, function (reason) {
                        console.log('No auth', reason);
                        _this.transitionToRoute('registerg');
                    });
            });

        }.observes('auth.loginData')

    });

}(window.Ember, window.DS, window.Firebase));
