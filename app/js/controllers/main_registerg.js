(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.RegistergController = Ember.Controller.extend({

        actions: {
            subscribe: function () {
                var _this = this,
                    loginData = this.get('auth.loginData'),
                    name = loginData.google.displayName,
                    email = this.get('email'),
                    message = this.get('message'),
                    auth = {
                        uid: loginData.uid
                    };

                Cseroldal.FirebaseRef.child('register-requests/' + loginData.uid).set({
                    userName: name,
                    email: email,
                    message: message,
                    auth: auth
                }, function (err) {
                    if (err) {
                        ohSnap('Hiba történt!', 'red', 'error');
                    } else {
                        ohSnap('Sikeres küldés!', 'green', 'info');
                    }

                    _this.set('submitted', true);

                });

            },
        },

        init: function () {

            var loginData = this.get('auth.loginData');

            if (loginData) {
                this.set('name', loginData.google.displayName);
            } else {
                this.transitionToRoute('login');
            }
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
