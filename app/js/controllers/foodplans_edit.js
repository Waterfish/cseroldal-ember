(function (Ember, Cs, undefined) {
    'use strict';

    Cs.FoodplansEditController = Ember.ObjectController.extend({
        actions: {

            addDay: function () {
                this.model.addDay();
            },

            removeDay: function (day) {
                this.model.removeDay(day);
            },

            addMeal: function (day) {
                this.model.addMeal(day);
            },

            removeMeal: function (day, meal) {
                this.model.removeMeal(day, meal);
            },

            addFood: function (meal) {
                meal.addFood();
            },

            removeFood: function (meal, food) {
                meal.removeFood(food);
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
            var _this = this;

            this._super.apply(this, arguments);

            Cs.Food.findAll().then(function (data) {
                _this.set('food_list', data);
            });
        }

    });

} (window.Ember, window.Cseroldal));
