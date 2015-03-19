(function (Ember, Firebase, undefined) {
    'use strict';

    // http://emberjs.com/api/classes/Ember.Application.html
    var Cs = window.Cseroldal = Ember.Application.create({

        ready: function() {
            // register AuthController factory (as a singleton)
            this.register('main:auth', Cs.AuthController);
            this.inject('route', 'auth', 'main:auth');
            this.inject('controller', 'auth', 'main:auth');
        },

        customEvents: {
            // add support for the paste event
        }
    });

    Cs.FirebaseUserPath = 'https://cseroldal.firebaseio.com/';
    var fref = Cs.FirebaseRef = new Firebase('https://cseroldal.firebaseio.com/');

    Cs.ApplicationRoute = Ember.Route.extend({

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

    Cs.ApplicationController = Ember.Controller.extend({

        appName: 'Cseroldal logo',

        init: function () {
            this.set('auth.loginData', fref.getAuth());
            this.userStatusChanged();
        },

        actions: {
            refreshRoute: function () {
                alert('refreshRoute');
            }
        },

        userStatusChanged: function () {

            console.log('User status changed');

            var _this = this,
                loginData = this.get('auth.loginData');

            if (!loginData) {
                // logged out
                this.set('auth.currentUser', null);
                this.set('auth.security', null);
                this.transitionToRoute('login');
                return;
            }

            // logged in
            Cs.Auth.find(loginData.uid).then(function (auth) {

                auth.getUser().then(function (user) {

                    _this.set('auth.currentUser', user);

                    user.getGroup().then(function (group) {
                        _this.set('auth.security', group);
                    }, function (reason) {
                        console.log('group not set');
                    });

                }, function (reason) {
                    console.warn('User not found.', reason);
                });

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
                // Check the reason why you have no json
                if (loginData.provider === 'google' || loginData.provider === 'facebook') {
                    Cs.FirebaseRef.child('register-requests/' + loginData.uid).once('value', function (snapshot) {

                        if (snapshot.exists()) {
                            _this.transitionToRoute('pending');
                            _this.get('auth').logout();
                        } else {
                            _this.transitionToRoute('registerg');
                        }

                    });
                } else if (loginData.provider === 'password') {
                    // TODO
                    console.warn('Not implemented yet!');
                }

            });

        }.observes('auth.loginData')

    });

}(window.Ember, window.Firebase));
