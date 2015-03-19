(function (Ember, Cseroldal, Firebase, undefined) {
    'use strict';

    Cseroldal.AuthController = Ember.Controller.extend({
        authed: false,
        loginData: null,
        currentUser: null,
        security: null,

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

        loginFacebook: function () {
            var _this = this;

            Cseroldal.FirebaseRef.authWithOAuthPopup('facebook',
            function (error, authData) {
                _this.authHandler(error, authData);
            });
        },

        logout: function () {
            Cseroldal.FirebaseRef.unauth();
            this.set('loginData', null);
        },

        createUser: function (credentials, callback) {
            // https://www.firebase.com/docs/web/api/firebase/createuser.html
            Cseroldal.FirebaseRef.createUser(credentials, callback);
        },

        removeUser: function (credentials, callback) {
            // https://www.firebase.com/docs/web/api/firebase/createuser.html
            Cseroldal.FirebaseRef.removeUser(credentials, callback);
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase));
