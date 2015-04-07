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

            day.meals.addObject({
                type: 'vacsora',
                order: 0,
                serving: 0,
                foodName: 'Nyárs',
                foods: []
            });

        },

        addFood: function (meal) {

            if (!meal.foods) {
                // meal.foods = [];
                // these should never happen. onDays observer is there for this
               return;
            }

            meal.foods.addObject({
                id: 'kolbasz-lecso',
                est_quantity: 0.1,
                custom_quantity: null,
                info: ''
            });

        },

        // this observes is making sure that object returned from
        // firebase has arrays. This can be removed if some way is found for
        // setting the previously undefined arrays.
        onDays: function () {
            for(var i = 0; i < this.days.length; i++) {
                if (!this.days[i].meals) {
                    this.days[i].meals = [];
                } else {
                    for(var j = 0; j < this.days[i].meals.length; j++) {
                        if (!this.days[i].meals[j].foods) {
                            this.days[i].meals[j].foods = [];
                        }
                    }
                }
            }
        }.observes('days'),


        // THIS SHOULD WORK
        setUnknownProperty: function(key, value){
            console.log('setUnknownProperty', key, value);
        },

        // THIS SHOULD WORK
        unknownProperty: function (key) {
            console.log('unknownProperty', key);
        },

        _serialize: function () {
            return this.getProperties(['title', 'description', 'author']);
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
        ref: Cs.FirebaseRef.child('foodplan/plan/')
    });


    Cs.PlanMeal = Ember.Object.extend({
        type: '',
        order: 0,
        serving: 0,
        foodName: '',
        foods: []
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
