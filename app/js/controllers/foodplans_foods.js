(function (Ember, Cs, undefined) {
    'use strict';

    Cs.FoodplansFoodsController = Ember.ObjectController.extend({
        actions: {

            newFood: function () {
                this.set('currentFood', Cs.Food.create());
            },

            saveFoodEdit: function (food) {
                var _this = this;

                food.save().then(function () {
                    _this.send('cancelFoodEdit', food);
                });
            },

            cancelFoodEdit: function (food) {
                food.destroy();
                this.set('currentFood', null);
            },

            editFood: function (food) {
                this.set('currentFood', food);
            },

            deleteFood: function (food) {
                food.remove();
            }

        },

        init: function () {

            var _this = this;

            Cs.Food.findAll().then(function (data) {
                _this.set('model', data);
            });

        }

    });

} (window.Ember, window.Cseroldal));
