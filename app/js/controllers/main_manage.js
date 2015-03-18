(function (Ember, Cs, undefined) {
    'use strict';

    Cs.ManageController = Ember.ObjectController.extend({
        actions: {

            reject: function (pending) {

                debugger;

                Cs.FirebaseRef.child(Cs.PendingAuth.path + pending.uid).remove();

            },

            approve: function (auth) {
                var auths = {},
                    name = auth.get('userName'),
                    uid = auth.get('auth.uid');

                auths[uid] = true;

                var ref = Cs.FirebaseRef.child('user-db/users').push({
                    name: name,
                    auths: auths
                });

                Cs.FirebaseRef.child('auths/' + uid).set({
                    uid: uid,
                    email: auth.get('email'),
                    user: ref.name()
                });

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
