(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.Auth = DS.Model.extend({
        uid: DS.attr('string'),
        type: DS.attr('string'),
        email: DS.attr('string'),
        password: DS.attr('string'),
        user: DS.belongsTo('user')
    });


    Cseroldal.AuthAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'auths';
        }
    });

} (window.Ember, window.Cseroldal, window.DS));
