(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.ManageController = Ember.ObjectController.extend({
        actions: {

            reject: function (pending) {
                pending.deleteRecord();
                pending.save();
            },

            approve: function (auth) {

                debugger;

                var auths = {},
                    name = auth.get('userName'),
                    uid = auth.get('auth.uid');

                auths[uid] = true;

                var ref = Cseroldal.FirebaseRef.child('user-db/users').push({
                    name: name,
                    auths: auths
                });

                Cseroldal.FirebaseRef.child('auths/' + uid).set({
                    uid: uid,
                    email: auth.get('email'),
                    user: ref.name()
                });

                auth.deleteRecord();
                auth.save();
            },

            delete: function (user) {

                user.deleteRecord();
                user.save();

            }

        },

        init: function () {

            this._super();

            // this.store.find('pendingAuth')
            //     .then(function (auths) {
            //         this.set('pendingAuths', auths);
            //     });
        },

        pendingAuths: null,
        existingAuths: null
    });

} (window.Ember, window.Cseroldal));
