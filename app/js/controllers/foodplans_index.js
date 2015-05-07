(function (Ember, Cs, undefined) {
    'use strict';

    Cs.FoodplansIndexController = Ember.ArrayController.extend({
        actions: {
            edit: function (plan) {
                this.transitionToRoute('foodplans.edit', plan);
            },

            delete: function (plan) {
                plan.remove();
            }
        }

    });

} (window.Ember, window.Cseroldal));
