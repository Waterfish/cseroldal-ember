(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.UnregisterController = Ember.Controller.extend({

        actions: {
            // register: function () {
            //     var _this = this;

            //     this.get('auth').createUser(this.get('email'), this.get('password'), function (error, user) {
            //         if (error === null) {
            //             console.log('Success: ', user);

            //             var auth = _this.store.createRecord('auth', {
            //                 uid: user.uid,
            //                 email: user.email,
            //                 passwordHash: user.md5_hash
            //             }),
            //             user = _this.store.createRecord('user', {
            //                 name: _this.get('name'),
            //                 biography: _this.get('biography')
            //             });

            //             auth.set('user', user);

            //             user.get('auths').pushObject(auth);


            //             auth.save();
            //             user.save();

            //         } else {
            //             console.warn('Error creating user: ', error);

            //             // TODO handle this
            //         }
            //     });
            // },

            unregister: function () {
                this.get('auth').removeUser(this.get('email'), this.get('password'), function(error) {
                    if (error === null) {


                    } else {
                        console.warn('Error removing user:', error);

                        // TODO handle this
                    }
                });
            }
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
