(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.ManageController = Ember.ObjectController.extend({
        actions: {
            reject: function (auth) {
                auth.deleteRecord();
                auth.save();
                // var _this= this,
                //     model = this.get('model');

                // model.set('user', this.get('auth.currentUser'));

                // model.save().then(function () {
                //     _this.transitionToRoute('gameHub.view', model);
                // });

            },

            approve: function (auth) {
                var auths = {},
                    name = auth.get('userName'),
                    uid = auth.get('uid');

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
