(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.User = Cseroldal.Model.extend({
        firstname: '',
        familyname: '',
        auths: null,
        group: null,

        name: function() {
            return this.get('firstname') + ' ' + this.get('familyname');
        }.property('firstname', 'familyname')
    });

    Cseroldal.User.reopenClass({
        path: 'user-db/users/'
    });

    /**
     * Read from firebase
     */
    Cseroldal.User.getFirebaseData = function (userID, key) {
        console.log('TODO Implement User.getFirebaseData');
    };

    Cseroldal.User.setFirebaseData = function (userID, key, snapshot) {

    };

} (window.Ember, window.Cseroldal));
