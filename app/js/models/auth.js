(function (Ember, Cs, undefined) {
    'use strict';

    Cs.Auth = Cs.Model.extend({
        uid: null,
        email: '',
        user: null,
        _serialize: function () {
            return this.getProperties(['uid', 'email', 'user']);
        },
        getUser: function () {
            return Cs.User.find(this.get('user'));
        }
    });

    Cs.Auth.reopenClass({
        path: 'auths/',
        ref: Cs.FirebaseRef.child('auths/')
    });


    Cs.PendingAuth = Cs.Model.extend({
        auth: null,
        email: '',
        message: '',
        userName: '',
        _serialize: function () {
            return this.getProperties(['auth', 'email', 'userName', 'message']);
        }
    });

    Cs.PendingAuth.reopenClass({
        path: 'register-requests/',
        ref: Cs.FirebaseRef.child('register-requests/')
    });

} (window.Ember, window.Cseroldal));
