(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.GameHubEditController = Ember.ObjectController.extend({
        actions: {
            save: function () {
                var _this= this,
                    model = this.get('model');
                model.save().then(function () {
                    _this.transitionToRoute('gameHub.view', model);
                });
            },

            cancel: function () {
                var model = this.get('model');

                if(model.get('isNew')) {
                    model.deleteRecord();
                    this.transitionToRoute('/');
                } else {
                    model.rollback();
                    this.transitionToRoute('gameHub.view', model);
                }
            }
        }
    });

} (window.Ember, window.Cseroldal));
