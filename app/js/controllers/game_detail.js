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
        }
    });

} (window.Ember, window.Cseroldal));
