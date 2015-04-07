(function (Ember, Cs, undefined) {
    'use strict';

    Cs.FoodplansEditController = Ember.ObjectController.extend({
        actions: {

            addDay: function () {
                this.model.addDay();
            },

            addMeal: function (day) {
                this.model.addMeal(day);
            },

            addFood: function (meal) {
                this.model.addFood(meal);
            },

            save: function () {
                var _this = this;
                this.model.save().then(function (foodplan) {
                    _this.transitionToRoute('foodplans.edit', foodplan);
                });

            },

            delete: function () {

            }

        }

    });

} (window.Ember, window.Cseroldal));
