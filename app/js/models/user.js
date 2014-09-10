(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.User = DS.Model.extend({
        name: DS.attr('string'),
        biography: DS.attr('string'),
        auths: DS.hasMany('auth')
    });


    Cseroldal.UserAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'user-db/users';
        }
    });

} (window.Ember, window.Cseroldal, window.DS));
