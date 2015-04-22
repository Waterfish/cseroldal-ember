(function (Ember, Cs, moment, undefined) {
    'use strict';

    Cs.Foodplan = Cs.Model.extend({
        title: '',
        description: '',
        created: null,
        modified: null,
        authors: [],
        days: [],

        addDay: function () {

            var newDate;

            if (!this.days) {
                this.set('days', []);
                newDate = moment().toJSON();
            } else {
                newDate = this.days[this.days.length - 1].date;

                newDate = moment(newDate).add('days', 1).toJSON();
            }

            this.days.addObject({
                date: newDate,
                meals: []
            });

        },

        removeDay: function (day) {
            this.get('days').removeObject(day);
        },

        addMeal: function (day) {

            if (!day.meals) {
               // day.meals = [];
               // these should never happen. onDays observer is there for this
               return;
            }

            day.meals.addObject(Cs.PlanMeal.create({
                type: '',
                order: 0,
                serving: 0,
                foodName: '',
                foods: [],
            }));

        },

        removeMeal: function (day, meal) {
            day.meals.removeObject(meal);
        },

        // this observes is making sure that object returned from
        // firebase has arrays. This can be removed if some way is found for
        // setting the previously undefined arrays.
        onDaysChange: function () {
            var convertMeals = function (meal) {
                    return Cs.PlanMeal.create(meal);
                };

            for (var i = 0; i < this.days.length; i++) {
                if (!this.days[i].meals) {
                    this.days[i].meals = [];
                } else {
                    this.days[i].meals = this.days[i].meals.map(convertMeals);
                }
            }
        }.observes('days'),

        // Computed properties
        createdDate: function () {
            return moment(this.get('created')).format('lll');
        }.property('created'),

        modifiedDate: function () {
            return moment(this.get('modified')).format('lll');
        }.property('modified'),

        createdModified: function () {
            if (Ember.isNone(this.get('modified'))) {
                return this.get('createdDate');
            } else {
                return this.get('createdDate') + ' / ' + this.get('modifiedDate');
            }
        }.property('created', 'modified'),

        authorList: function () {
            return this.get('authors').join(', ');
        }.property('authors'),


        // // THIS SHOULD WORK
        // setUnknownProperty: function(key, value){
        //     console.log('setUnknownProperty', key, value);
        // },

        // // THIS SHOULD WORK
        // unknownProperty: function (key) {
        //     console.log('unknownProperty', key);
        // },

        _serialize: function () {
            var object = this.getProperties(['title', 'description', 'authors']);

            if (Ember.isNone(this.get('guid'))) {
                object.created = moment().toJSON();
            } else {
                object.modified = moment().toJSON();
            }

            object.days = this.days.map(function (item) {
                return {
                    date: item.date,
                    meals: item.meals.map(function (meal) {
                        return meal._serialize();
                    })
                };
            });

            return object;
        }
        // getGroup: function () {
        //     return Cs.UserGroup.find(this.get('group'));
        // },
        // name: function() {
        //     return this.get('firstname') + ' ' + this.get('familyname');
        // }.property('firstname', 'familyname')
        //

    });

    Cs.Foodplan.reopenClass({
        path: 'foodplan/plan/',
        ref: Cs.FirebaseRef.child('foodplan/plan/'),
        staticMealTypes: [{
            value: 1,
            label: 'Reggeli'
        },{
            value: 2,
            label: 'Tizorai'
        },{
            value: 3,
            label: 'Ebed'
        },{
            value: 4,
            label: 'Uzsonna'
        },{
            value: 5,
            label: 'Vacsora'
        }]
    });


    Cs.PlanMeal = Ember.Object.extend({

        init: function () {
            this._super();

            if (Ember.isNone(this.get('foods'))) {
                this.set('foods', []);
            } else {
                this.set('foods', this.foods.map(function (item) {

                    item.serving = this.get('serving');

                    return Cs.PlanFood.create(item);
                }, this));

                if (this.foods.length !== 0) {
                    this.addFood();
                }
            }

        },

        oneFoodChange: function () {
            var foods = this.get('foods'),
                lastFood;

            if (foods.length === 0) {
                return;
            }

            // foods.get('lastObject') is not working for some reason
            lastFood = foods[foods.length - 1];

            if (lastFood.food_id !== undefined) {
                this.addFood();
            }

        }.observes('foods.@each.food_id'),

        sumPrice: function () {

            // var sum = 0;

            return this.get('foods')
                .filterBy('cost')
                .reduce (function (prevValue, food) {
                    return prevValue + food.get('cost');
                }, 0);

                // .forEach(function (food) {
                //     sum += food.get('cost');
                // });

            // return sum;

        }.property('foods.@each.cost'),

        addFood: function () {

            if (!this.foods) {
               return;
            }

            this.foods.pushObject(Cs.PlanFood.create({
                serving: this.get('serving')
            }));

        },

        updateFoods: function () {
            var serving = this.get('serving');

            if (!this.foods) {
               return;
            }

            this.foods.forEach(function (food) {
                food.set('serving', serving);
            });
        }.observes('serving'),

        removeFood: function (food) {
            this.get('foods').removeObject(food);
        },

        _serialize: function () {
            var object = this.getProperties(['type', 'order', 'serving', 'foodName']);

            if (this.foods) {
                object.foods = this.foods
                    .filterBy('food_id')
                    .map(function (item) {
                        return item._serialize();
                    });
            }

            return object;
        }
    });

    Cs.PlanFood = Ember.Object.extend({

        init: function () {
            this._super();

            if (!Ember.isNone(this.get('food_id'))) {
                this.get_food();
            }
        },

        // food_id: '',
        // est_quantity: 0.1,
        // custom_quantity: null,
        //
        get_food: function () {
            var _this = this,
                foodId = this.get('food_id');

            if (foodId) {
                Cs.Food.find(foodId).then(function (food) {
                    _this.set('food', food);
                });
            }

        }.observes('food_id'),

        cost: function () {

            var food = this.get('food'),
                serving = this.get('serving'),
                quantity = this.get('head_quantity');

            if (Ember.isNone(food) || Ember.isNone(quantity) || quantity === 0) {
                return 0;
            }

            // multiply the price with the quantity (per head) with the number
            // of servings
            return this.get('food.price.rsd') * quantity * serving;

        }.property('food', 'food.price.rsd', 'head_quantity', 'serving'),

        destroy: function () {
            if (!Ember.isNone(this.get('food'))) {
                this.get('food').destroy();
            }
            this._super();
        },

        _serialize: function () {
            return this.getProperties(['food_id', 'head_quantity']);
        }
    });


    ////////////////////////////////////////////////////////////////////////////


    Cs.Food = Cs.Model.extend({
        /**
         * Support multiple units
         */
        baseunit: '',
        label: '',
        price: {},

        // list of tags, reserved
        tags: null,

        /**
         * Support multiple prices
         */

        info: '',
        _serialize: function () {
            return this.getProperties(['baseunit', 'label', 'price', 'info']);
        }
    });

    Cs.Food.reopenClass({
        path: 'foodplan/food/',
        ref: Cs.FirebaseRef.child('foodplan/food/')
    });

} (window.Ember, window.Cseroldal, window.moment));
