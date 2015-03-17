(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.UserIndexController = Ember.ObjectController.extend({
        actions: {
            // delete: function () {
            //     var _this = this,
            //         model = this.get('model');

            //     model.deleteRecord();
            //     model.save().then(function () {

            //         _this.transitionToRoute('/');

            //     });
            // }
        },

        userProfile: function () {

            console.log('view userProfile');

            Cseroldal.User.getFirebaseData();

            return this.get('auth.currentUser');

        }.property('auth.currentUser')
    });

    Cseroldal.UserEditController = Ember.ObjectController.extend({
        actions: {
            // delete: function () {
            //     var _this = this,
            //         model = this.get('model');

            //     model.deleteRecord();
            //     model.save().then(function () {

            //         _this.transitionToRoute('/');

            //     });
            // }
        },

        userProfile: function () {

            console.log('edit userProfile');

            Cseroldal.User.getFirebaseData();

            // return this.get('auth.currentUser');

            return {
                firstname: 'Jozsi',
                familyname: 'Kokrehel'
            };

        }.property('auth.currentUser')
    });

} (window.Ember, window.Cseroldal));
