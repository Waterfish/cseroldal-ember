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

            addItem: function () {
                this.model.addItem();
            },

            removeItem: function (item) {
                this.model.removeItem();
            },

            addMeal: function (day) {
                day.addMeal();
            },

            removeMeal: function (day, meal) {
                day.removeMeal(meal);
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
                    ohSnap('Elmentve', 'green', 'info');
                }, function (error) {
                    Ember.Logger.error(error);
                    ohSnap('Sikertelen mentés', 'red', 'error');
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
