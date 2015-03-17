(function (Ember, Cseroldal, Firebase, undefined) {
    'use strict';

    Cseroldal.AuthController = Ember.Controller.extend({
        authed: false,
        loginData: null,
        currentUser: null,
        security: null,

        // init: function () {

        //     var _this = this,
        //         ref = Cseroldal.FirebaseRef;

        //     this._super();
        // },

        authHandler: function (error, authData) {
            if (error) {
                console.log('Error in login', error);
            } else if (authData) {
                this.set('loginData', authData);
            } else {
                this.set('loginData', null);
            }
        },

        login: function (email, password) {
            var _this = this;

            Cseroldal.FirebaseRef.authWithPassword({
                email: email,
                password: password
            }, function (error, authData) {
                _this.authHandler(error, authData);
            });
        },

        loginGoogle: function () {
            var _this = this;

            Cseroldal.FirebaseRef.authWithOAuthPopup('google',
            function (error, authData) {
                _this.authHandler(error, authData);
            });
        },

        logout: function () {
            Cseroldal.FirebaseRef.unauth();
            this.set('loginData', null);
        // },

        // createUser: function (email, password, callback) {
        //     this.authClient.createUser(email, password, callback);
        // },

        // removeUser: function (email, password, callback) {
        //     this.authClient.removeUser(email, password, callback);
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase));
