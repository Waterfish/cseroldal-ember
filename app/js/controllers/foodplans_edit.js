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
                meal.addFood();
            },

            save: function () {
                var _this = this,
                    user = this.get('auth.currentUser');

                this.model.authors.addObject(user.get('name'));

                this.model.save().then(function (foodplan) {
                    _this.transitionToRoute('foodplans.edit', foodplan);
                });

            },

            delete: function () {
                this.model.remove();
                this.transitionToRoute('foodplans');
            },

            cancel: function () {
                this.transitionToRoute('foodplans');
            }

        },

        mealTypes: Cs.Foodplan.staticMealTypes,

        init: function () {
            this._super.apply(this, arguments);

            console.log(Cs.Foodplan.staticMealTypes);
        }

    });

} (window.Ember, window.Cseroldal));
