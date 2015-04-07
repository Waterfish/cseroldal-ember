(function (Ember, Cs, undefined) {
    'use strict';

    Cs.Foodplan = Cs.Model.extend({
        title: '',
        description: '',
        author: null,
        days: [],

        addDay: function () {

            if (!this.days) {
                this.set('days', []);
            }

            this.days.addObject({
                date: '',
                meals: []
            });

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

        // this observes is making sure that object returned from
        // firebase has arrays. This can be removed if some way is found for
        // setting the previously undefined arrays.
        onDaysChange: function () {
            console.log('onDays observed');

            for(var i = 0; i < this.days.length; i++) {
                if (!this.days[i].meals) {
                    this.days[i].meals = [];
                } else {
                    this.days[i].meals = this.days[i].meals.map(function (item, index) {
                        return Cs.PlanMeal.create(item);
                    });
                }
            }
        }.observes('days'),


        // // THIS SHOULD WORK
        // setUnknownProperty: function(key, value){
        //     console.log('setUnknownProperty', key, value);
        // },

        // // THIS SHOULD WORK
        // unknownProperty: function (key) {
        //     console.log('unknownProperty', key);
        // },

        _serialize: function () {
            var object = this.getProperties(['title', 'description', 'author']);

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
        // type: '',
        // order: 0,
        // serving: 0,
        // foodName: '',
        // foods: [],

        init: function () {
            this._super();
        },

        onFoodsChange: function () {
            console.log('onFoodsChange observed');

            this.foods = this.foods.map(function (item) {
                return Cs.PlanFood.create(item);
            });

        }.observes('foods'),

        addFood: function () {

            if (!this.foods) {
                // meal.foods = [];
                // these should never happen. onDays observer is there for this
               return;
            }

            this.foods.addObject(Cs.PlanFood.create());

        },

        _serialize: function () {
            var object = this.getProperties(['type', 'order', 'serving', 'foodName']);

            object.foods = this.foods.map(function (item) {
                return item._serialize();
            });

            return object;
        }
    });

    Cs.PlanFood = Ember.Object.extend({
        // food_id: '',
        // est_quantity: 0.1,
        // custom_quantity: null,
        // info: '',

        _serialize: function () {
            return this.getProperties(['food_id', 'est_quantity', 'custom_quantity', 'info']);
        }
    });


    Cs.Food = Cs.Model.extend({
        /**
         * Support multiple units
         */
        baseunit: '',
        label: '',
        price: null,

        /**
         * Support multiple prices
         */

        info: '',
        _serialize: function () {
            return this.getProperties(['baseunit', 'label', 'price', 'info']);
        }
        // getGroup: function () {
        //     return Cs.UserGroup.find(this.get('group'));
        // },
        // name: function() {
        //     return this.get('firstname') + ' ' + this.get('familyname');
        // }.property('firstname', 'familyname')
    });

    Cs.Food.reopenClass({
        path: 'foodplan/food/',
        ref: Cs.FirebaseRef.child('foodplan/food/')
    });

} (window.Ember, window.Cseroldal));
