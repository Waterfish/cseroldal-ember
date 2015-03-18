(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.Auth = Cseroldal.Model.extend({
        uid: null,
        email: '',
        user: null
        // serialize: function () {

        // }
    });

    Cseroldal.Auth.reopenClass({
        path: 'auths/'
    });


    Cseroldal.PendingAuth = Cseroldal.Model.extend({
        auth: null,
        email: '',
        message: '',
        userName: ''
    });

    Cseroldal.PendingAuth.reopenClass({
        path: 'register-requests/'
    });

} (window.Ember, window.Cseroldal));
