(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.RegisterController = Ember.Controller.extend({

        actions: {
            register: function () {
                var _this = this;

                this.get('auth').createUser(this.get('email'), this.get('password'), function (error, loginData) {
                    if (error === null) {

                        var auths = {};

                        auths[loginData.uid] = true;

                        var ref = Cseroldal.FirebaseRef.child('user-db/users').push({
                            name: _this.get('name'),
                            auths: auths
                        });

                        Cseroldal.FirebaseRef.child('auths/' + loginData.uid).set({
                            uid: loginData.uid,
                            email: loginData.email,
                            passwordHash: loginData.md5_hash,
                            user: ref.name()
                        });

                    } else {
                        console.warn('Error creating user: ', error);

                        // TODO handle this
                    }
                });
            }
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
