(function (Ember, Cseroldal, undefined) {
    'use strict';

    Cseroldal.GameHubSettingsController = Ember.ObjectController.extend({
        actions: {
            addLocation: function () {

                var locationLabel = this.get('locationLabel'),
                    location = this.store.createRecord('gameLocation', {
                        label: locationLabel
                    });

                location.save();

                this.set('locationLabel', '');
            },

            removeLocation: function (location) {
                location.deleteRecord();
                location.save();

                // OR
                // location.destroyRecord();
            }

        },

        locationLabel: null,

        locations: null,

        locationEnabled: function () {
            if (this.get('locationLabel').trim() !== '') {
                return true;
            } else {
                return false;
            }
        }

    });

} (window.Ember, window.Cseroldal));
