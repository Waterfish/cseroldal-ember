(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.Auth = DS.Model.extend({
        uid: DS.attr('string'),
        email: DS.attr('string'),
        passwordHash: DS.attr('string'),
        user: DS.belongsTo('user', {async: true})
    });


    Cseroldal.AuthAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'auths';
        }
    });

    Cseroldal.PendingAuth = Cseroldal.Auth.extend({
        email: DS.attr('string'),
        message: DS.attr('string'),
        userName: DS.attr('string')
    });

    Cseroldal.PendingAuthAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'register-requests';
        }
    });

} (window.Ember, window.Cseroldal, window.DS));
