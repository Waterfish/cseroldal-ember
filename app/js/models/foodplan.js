(function (Ember, Cs, moment, undefined) {
    'use strict';

    Cs.Foodplan = Cs.Model.extend({
        title: '',
        description: '',
        created: null,
        modified: null,
        authors: [],
        emdays: [],
        emitems: [],

        addDay: function () {

            var newDate;

            if (!this.days) {
                this.set('days', []);
            }

            if (this.days.length === 0) {
                newDate = moment().toJSON();
            } else {
                newDate = this.days[this.days.length - 1].date;

                newDate = moment(newDate).add(1, 'days').toJSON();
            }

            this.days.addObject(Cs.PlanDay.create({
                date: newDate,
                meals: []
            }));

        },

        removeDay: function (day) {
            this.get('days').removeObject(day);
        },

        addItem: function () {
            if (!this.items) {
                this.set('items', []);
            }

            this.items.addObject(Cs.PlanItem.create({}));
        },

        removeItem: function (item) {
            this.get('items').removeObject(item);
        },

        // this observes is making sure that object returned from
        // firebase has arrays. This can be removed if some way is found for
        // setting the previously undefined arrays.
        onDaysChange: function () {

            if (Ember.isNone(this.get('emdays'))) {
                this.set('days', []);
            } else {
                this.set('days', this.emdays.map(function (item) {
                    return Cs.PlanDay.create(item);
                }, this));
            }

        }.observes('emdays'),

        onItemsChange: function () {

            if (Ember.isNone(this.get('emitems'))) {
                this.set('items', []);
            } else {
                this.set('items', this.emitems.map(function (item) {
                    return Cs.PlanItem.create(item);
                }, this));
            }
        }.observes('emitems'),

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

        _serialize: function () {
            var object = this.getProperties(['title', 'description', 'authors']);

            if (Ember.isNone(this.get('guid'))) {
                object.created = moment().toJSON();
            } else {
                object.modified = moment().toJSON();
            }

            if (this.days) {
                object.emdays = this.days.map(function (day) {
                    return day._serialize();
                });
            }

            if (this.items) {
                object.emitems = this.items.map(function (item) {
                    return item._serialize();
                });
            }

            return object;
        }

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

    Cs.PlanDay = Ember.Object.extend({

        init: function () {
            this._super();

            if (Ember.isNone(this.get('meals'))) {
                this.set('meals', []);
            } else {
                this.set('meals', this.meals.map(function (item) {
                    return Cs.PlanMeal.create(item);
                }, this));
            }

        },

        dayName: function () {
            return moment(this.get('date')).format('dddd');
        }.property('date'),

        addMeal: function () {

            if (!this.meals) {
               // this.meals = [];
               // these should never happen.
               Ember.Logger.error('Adding new meal but day.meals not defined!')
               return;
            }

            this.meals.addObject(Cs.PlanMeal.create({
                type: '',
                order: 0,
                serving: 0,
                foodName: '',
                foods: [],
            }));

        },

        removeMeal: function (meal) {
            this.meals.removeObject(meal);
        },

        _serialize: function () {
            var object = this.getProperties(['date']);

            object.meals = this.meals.map(function (meal) {
                return meal._serialize();
            });

            return object;
        }
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

            return this.get('foods')
                .filterBy('cost')
                .reduce (function (prevValue, food) {
                    return prevValue + food.get('cost');
                }, 0);

        }.property('foods.@each.cost'),

        sumPricePerHead: function () {
            var serving = this.get('serving');

            if (serving) {
                return this.get('sumPrice') / this.get('serving');
            } else {
                return 0;
            }

        }.property('sumPrice'),

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

        priceInfo: function () {
            var serving = this.get('serving'),
                quantity = this.get('head_quantity'),
                cost = this.get('cost');

            if (cost === 0) {
                return false;
            }

            return this.get('food.price.rsd') + ' rsd/kg  ×  ' + quantity + ' kg/fő  ×  ' + serving + ' fő  =  ' + cost + ' rsd';

        }.property('cost'),

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

    Cs.PlanItem = Cs.PlanFood.extend({

        cost: function () {

            var food = this.get('food'),
                quantity = this.get('head_quantity');

            if (Ember.isNone(food) || Ember.isNone(quantity) || quantity === 0) {
                return 0;
            }

            // multiply the price with the quantity (per head) with the number
            // of servings
            return this.get('food.price.rsd') * quantity;

        }.property('food', 'food.price.rsd', 'head_quantity'),

        priceInfo: function () {
            var quantity = this.get('head_quantity'),
                cost = this.get('cost');

            if (cost === 0) {
                return false;
            }

            return this.get('food.price.rsd') + ' rsd/kg  ×  ' + quantity + ' kg =  ' + cost + ' rsd';

        }.property('cost')

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
