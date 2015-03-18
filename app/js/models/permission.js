(function (Ember, Cseroldal, undefined) {
    'use strict';

    /*
     * Permission, which describes what can the User with this permission do.
     */
    // Cseroldal.Permission = DS.Model.extend({
    //     description: DS.attr('string')
    // });


    // Cseroldal.PermissionAdapter = Cseroldal.ApplicationAdapter.extend({
    //     pathForType: function() {
    //         return 'security/permissions';
    //     }
    // });

    // /*
    //  * User has one group, and in group permissions are defined.
    //  */
    // Cseroldal.UserGroup = Cseroldal.Auth.extend({
    //     name: DS.attr('string'),
    //     description: DS.attr('string'),
    //     user: DS.hasMany('user'),
    //     permissions: DS.hasMany('permission', {inverse: null, async: true})
    // });

    // Cseroldal.UserGroupAdapter = Cseroldal.ApplicationAdapter.extend({
    //     pathForType: function() {
    //         return 'security/groups';
    //     }
    // });

} (window.Ember, window.Cseroldal));
