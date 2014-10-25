(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.RegistergController = Ember.Controller.extend({

        actions: {
            subscribe: function () {
                var _this = this,
                    loginData = this.get('auth.loginData');

                Cseroldal.FirebaseRef.child('pending-auths/' + loginData.uid).set({
                    uid: loginData.uid,
                    email: loginData.email,
                    userName: _this.get('name')
                });

            },
        },

        init: function () {
            var loginData = this.get('auth.loginData');

            // Redirect to login.
            if (loginData) {
                console.log('loginData present');
                this.set('email', loginData.email);
            } else {
                this.transitionToRoute('login');
            }
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
