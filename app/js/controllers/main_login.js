(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.LoginController = Ember.Controller.extend({

        actions: {
            login: function () {
                var _this = this;

                console.log('LoginController.login');

                this.get('auth').login(this.get('email'), this.get('password'));
            }
        },

        init: function() {
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
