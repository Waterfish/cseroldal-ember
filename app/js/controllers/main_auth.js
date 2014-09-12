(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.AuthController = Ember.Controller.extend({
        authed: false,
        loginData: null,
        currentUser: null,

        init: function () {

            this._super();

            this.authClient = new FirebaseSimpleLogin(Cseroldal.FirebaseRef, function(error, loginData) {

                if (error) {
                    // TODO handle with UI
                    console.log('Authentication failed: ' + error);
                } else if (loginData) {
                    this.set('authed', true);
                    this.set('loginData', loginData);

                } else {
                    this.set('authed', false);
                    this.set('loginData', null);
                }
            }.bind(this)); // attach login and logout event handlers ?
        },

        login: function (email, password) {

            this.authClient.login('password', {
                email: email,
                password: password
            });
        },

        logout: function () {
            this.authClient.logout();
        },

        createUser: function (email, password, callback) {
            this.authClient.createUser(email, password, callback);
        },

        removeUser: function (email, password, callback) {
            this.authClient.removeUser(email, password, callback);
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
