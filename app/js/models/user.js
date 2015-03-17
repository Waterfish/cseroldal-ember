(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.User = DS.Model.extend({
        firstname: DS.attr('string'),
        familyname: DS.attr('string'),
        auths: DS.hasMany('auth'),
        group: DS.belongsTo('userGroup', {
            async: true,
            inverse: 'user'
        }),

        name: function() {
            return this.get('firstname') + ' ' + this.get('familyname');
        }.property('firstname', 'familyname')
    });

    /**
     * Read from firebase
     */
    Cseroldal.User.getFirebaseData = function (userID, key) {
        console.log('TODO Implement User.getFirebaseData');
    };

    Cseroldal.User.setFirebaseData = function (userID, key, snapshot) {

    };

    Cseroldal.UserAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'user-db/users';
        }
    });

    // Cseroldal.PendingUser = Cseroldal.User.extend({
    //     auths: null
    // });

    // Cseroldal.PendingUserAdapter = Cseroldal.ApplicationAdapter.extend({
    //     pathForType: function() {
    //         return 'pending-users';
    //     }
    // });

} (window.Ember, window.Cseroldal, window.DS));
