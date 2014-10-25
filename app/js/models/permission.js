(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.Permission = DS.Model.extend({
        description: DS.attr('string')
    });


    Cseroldal.PermissionAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'security/permissions';
        }
    });

    Cseroldal.UserGroup = Cseroldal.Auth.extend({
        name: DS.attr('string'),
        description: DS.attr('string'),
        permissions: DS.hasMany('permission', {inverse: null, async: true})
    });

    Cseroldal.UserGroupAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'security/groups';
        }
    });

} (window.Ember, window.Cseroldal, window.DS));
