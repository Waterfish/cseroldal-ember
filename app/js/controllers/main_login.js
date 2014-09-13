(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.LoginController = Ember.Controller.extend({

        actions: {
            login: function () {
                this.get('auth').login(this.get('email'), this.get('password'));
            },

            loginGoogle: function () {
                this.get('auth').loginGoogle();
            }
        },

        hideMessage: true

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
