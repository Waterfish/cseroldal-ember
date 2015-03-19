(function (Ember, Cs, undefined) {
    'use strict';

    /*
     * Permission, which describes what can the User with this permission do.
     */
    Cs.Permission = Cs.Model.extend({
        description: '',
        save: Ember.$.noop(), // disable save
        remove: Ember.$.noop() // disable remove
    });

    Cs.Permission.reopenClass({
        path: 'security/permissions',
        ref: Cs.FirebaseRef.child('security/permissions')
    });

    /*
     * User has one group, and in group permissions are defined.
     */
    Cs.UserGroup = Cs.Model.extend({
        name: '',
        description: '',
        // user: DS.hasMany('user'),
        permissions: null,

        save: Ember.$.noop(), // disable save
        remove: Ember.$.noop() // disable remove
    });

    Cs.UserGroup.reopenClass({
        path: 'security/groups',
        ref: Cs.FirebaseRef.child('security/groups')
    });

} (window.Ember, window.Cseroldal));
