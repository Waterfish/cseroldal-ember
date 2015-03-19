(function (Ember, Cs, undefined) {
    'use strict';

    Cs.User = Cs.Model.extend({
        firstname: '',
        familyname: '',
        auths: null,
        group: null,
        _serialize: function () {
            return this.getProperties(['firstname', 'familyname', 'auths', 'group']);
        },
        getGroup: function () {
            return Cs.UserGroup.find(this.get('group'));
        },
        name: function() {
            return this.get('firstname') + ' ' + this.get('familyname');
        }.property('firstname', 'familyname')
    });

    Cs.User.reopenClass({
        path: 'user-db/users/',
        ref: Cs.FirebaseRef.child('user-db/users/')
    });

} (window.Ember, window.Cseroldal));
