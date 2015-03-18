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
            var _this = this;
            // TODO uncomment
            // this.set('auth.loginData', fref.getAuth());
            // this.userStatusChanged();

            Cs.Auth.findAll().then(function (items) {
                _this.set('auths', items);
            },
            function (reason) {
                console.log('buuu', reason);
            });
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
            fref.child(Cs.Auth.path + loginData.uid).once('value', function (auth) {

                if (auth.exists()) {

                    fref.child(Cs.User.path + auth.val().user).once('value', function (snapUser) {
                        var user = snapUser.val();
                        _this.set('auth.currentUser', user);

                        if (user.group) {
                            // TODO Change to model approach
                            Cs.FirebaseRef.child('security/groups/' + user.group)
                                .once('value', function (snapshot) {
                                    _this.set('auth.security', snapshot.val());
                                }, function (errorObject) {
                                    // TODO Handle this.
                                    console.log('The read failed: ' + errorObject.code);
                                });
                        } else {
                            // TODO Handle this.
                            console.log('group not set');
                        }

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
                } else {
                    // Check the reason why you have no json
                    if (loginData.provider === 'google') {
                        Cs.FirebaseRef.child('register-requests/' + loginData.uid).once('value', function (snapshot) {

                            if (snapshot.exists()) {
                                _this.transitionToRoute('pending');
                            } else {
                                _this.transitionToRoute('registerg');
                            }

                        });
                    } else if (loginData.provider === 'facebook') {
                        debugger;
                    } else if (loginData.provider === 'password') {
                        debugger;
                    }
                }

            }, function(reason) {
                console.error(reason);

            });

        }.observes('auth.loginData')

    });

}(window.Ember, window.Firebase));
