(function (Ember, Cs, ohSnap, undefined) {
    'use strict';

    Cs.RegistergController = Ember.Controller.extend({

        actions: {
            subscribe: function () {
                var _this = this,
                    loginData = this.get('auth.loginData'),
                    name = this.get('name'),
                    email = this.get('email'),
                    message = this.get('message'),
                    auth = {
                        uid: loginData.uid
                    };

                Cs.PendingAuth.create({
                    userName: name,
                    email: email,
                    message: message,
                    auth: auth
                }).save(loginData.uid).then(function () {
                    ohSnap('Sikeres küldés!', 'green', 'info');
                    _this.set('submitted', true);
                }, function () {
                    ohSnap('Hiba történt!', 'red', 'error');
                });

            },
        },

        init: function () {

            var loginData = this.get('auth.loginData');

            if (loginData) {
                if (loginData.provider === 'google') {
                    this.set('name', loginData.google.displayName);
                } else if (loginData.provider === 'facebook') {
                    this.set('name', loginData.facebook.displayName);
                }
            } else {
                this.transitionToRoute('login');
            }
        }

    });

} (window.Ember, window.Cseroldal, window.ohSnap));
