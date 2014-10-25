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
        userName: DS.attr('string'),
        user: null
    });

    Cseroldal.PendingAuthAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'pending-auths';
        }
    });

} (window.Ember, window.Cseroldal, window.DS));
