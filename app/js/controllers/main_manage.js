(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.ManageController = Ember.ObjectController.extend({
        actions: {
            acceptUser: function () {
                // var _this= this,
                //     model = this.get('model');

                // model.set('user', this.get('auth.currentUser'));

                // model.save().then(function () {
                //     _this.transitionToRoute('gameHub.view', model);
                // });

            },

            rejectUser: function () {
                // var model = this.get('model');

                // if(model.get('isNew')) {
                //     model.deleteRecord();
                //     this.transitionToRoute('/');
                // } else {
                //     model.rollback();
                //     this.transitionToRoute('gameHub.view', model);
                // }
            }

        },

        init: function () {

            this._super();

            // this.store.find('pendingAuth')
            //     .then(function (auths) {
            //         this.set('pendingAuths', auths);
            //     });
        },

        pendingAuths: null,
    });

} (window.Ember, window.Cseroldal));
