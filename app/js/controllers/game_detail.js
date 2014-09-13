(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.GameHubViewController = Ember.ObjectController.extend({
        actions: {
            delete: function () {
                var _this = this,
                    model = this.get('model');

                model.deleteRecord();
                model.save().then(function () {

                    _this.transitionToRoute('/');

                });
            }
        },

        isOwner: function () {
            return this.get('auth.currentUser') === this.get('model').get('user');
        }.property('auth.currentUser')
    });

} (window.Ember, window.Cseroldal));
