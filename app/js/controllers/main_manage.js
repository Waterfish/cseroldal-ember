(function (Ember, Cs, undefined) {
    'use strict';

    Cs.ManageController = Ember.ObjectController.extend({
        actions: {

            reject: function (pending) {
                pending.remove();
            },

            approve: function (pending) {
                var auths = {},
                    name = pending.get('userName'),
                    uid = pending.get('auth.uid');

                auths[uid] = true;

                Cs.User.create({
                    firstname: name,
                    auths: auths,
                    group: 'cserkesz'
                }).save().then(function (user) {

                    Cs.Auth.create({
                        uid: uid,
                        user: user.get('guid')
                    }).save(uid);

                });

                pending.remove();

            },

            delete: function (user) {
                var auths = user.get('auths');

                user.remove();
                Ember.$.each(auths, function (key) {
                    Cs.Auth.find(key).then(function(auth) {auth.remove();});
                });
            }

        },

        init: function () {

            this._super();

        },

        pendingAuths: null,
        users: null
    });

} (window.Ember, window.Cseroldal));
