(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.LoginController = Ember.Controller.extend({

        actions: {
            login: function () {
                this.get('auth').login(this.get('email'), this.get('password'));
            },

            loginGoogle: function () {
                this.get('auth').loginGoogle();
            },

            loginFacebook: function () {
                this.get('auth').loginFacebook();
            },

            shortcut_login: function (username, password) {
                this.set('email', username);
                this.set('password', password);

                this.send('login');
            }
        },

        hideMessage: true

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
