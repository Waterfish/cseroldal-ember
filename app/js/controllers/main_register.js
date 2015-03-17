(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.RegisterController = Ember.Controller.extend({

        actions: {
            subscribe: function () {
                var _this = this,
                    email = this.get('email'),
                    name = this.get('name'),
                    message = this.get('message'),
                    id = Cseroldal.Common.emailToId(email);

                // TODO check if already exist
                // TODO check if already pending

                Cseroldal.FirebaseRef.child('register-requests/' + id).set({
                    email: email,
                    userName: name,
                    message: message
                }, function (err) {
                    if (err) {
                        ohSnap('Hiba történt!', 'red', 'error');
                    } else {
                        ohSnap('Sikeres küldés!', 'green', 'info');
                    }

                    _this.set('submitted', true);

                });

            }
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
