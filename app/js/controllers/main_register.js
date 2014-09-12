(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.RegisterController = Ember.Controller.extend({

        actions: {
            register: function () {
                var _this = this;

                this.get('auth').createUser(this.get('email'), this.get('password'), function (error, loginData) {
                    if (error === null) {

                        Cseroldal.FirebaseRef.child('auths/' + loginData.uid).set({
                            uid: loginData.uid,
                            email: loginData.email,
                            passwordHash: loginData.md5_hash
                        });

                        var user = _this.store.createRecord('user', {
                            name: _this.get('name'),
                            biography: _this.get('biography')
                        });

                        _this.store.find('auth', loginData.uid).then(function (auth) {
                            auth.set('user', user);
                            user.get('auths').pushObject(auth);

                            auth.save();
                            user.save();
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
