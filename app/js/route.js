(function (Ember, Cs, undefined) {
    'use strict';
    // App route
    Cs.Router.map(function() {

        this.resource('gameHub', function () {
            this.route('view', {path: '/view/:game_id'});
            this.route('edit', {path: '/edit/:game_id'});
            this.route('new', {path: '/new'});
            this.route('settings', {path: '/settings'});
        });

        this.resource('foodplans', function () {
            // this.route('view', {path: '/view/:game_id'});
            this.route('edit', {path: '/edit/:plan_id'});
            this.route('new', {path: '/new'});
            // this.resource('foods', function () {

            // });
            // this.resource('meals', function () {

            // });
        });



        this.resource('user', function () {
            this.route('edit', {path: '/edit'});
        });


        this.route('manage');

        this.route('login');
        this.route('register');
        this.route('registerg');
        this.route('pending');

        this.route('forbidden');

        this.route('notfound');

    });

    Ember.Route.reopen({
        beforeModel: function (transition) {

            // These routes you do not need to be logged in to access.
            var openRoutes = ['index', 'login', 'register'];

            // Not logged in and attempting to access protected route, redirect to login.
            if (openRoutes.indexOf(transition.targetName) === -1 &&
                    Ember.isEmpty(this.get('auth.loginData'))) {

                Ember.Logger.warn('Attempting to access protected route ' +
                    'when not logged in. Aborting.');

                // Save the transition to try again status changes.
                this.set('auth.transition', transition);
                this.set('auth.transitionToLogin', true);

                // Redirect to login.
                this.transitionTo('login');
            }
        }
    });

    Cs.ManageRoute = Ember.Route.extend({
        // model: function() {
        //     return this.store.find('game');
        // }

        setupController: function(controller, model) {
            this._super(controller, model);

            Cs.PendingAuth.findAll().then(function (pendings) {
                controller.set('pendingAuths', pendings);
            });

            Cs.User.findAll().then(function (users) {
                controller.set('users', users);
            });

        },

        // init: function () {
        //     // check privileges
        //     // if (!this.get('auth.currentUser.isAdmin')) {
        //     //     // this.set('auth.transition', transition);
        //     // }
        // }
    });

    Cs.LoginRoute = Ember.Route.extend({

        setupController: function(controller, model) {
            this._super(controller, model);
            // decide if login was transited from other page
            controller.set('hideMessage', true);
            if (this.get('auth.transitionToLogin')) {
                controller.set('hideMessage', false);
                this.set('auth.transitionToLogin', false);
            }
        }

    });

    Cs.IndexRoute = Ember.Route.extend({
        templateName: 'home'
    });

    // Cs.PedingRoute = Ember.Route.extend({
    //     templateName: 'pendinguser'
    // });

    Cs.GameHubRoute = Ember.Route.extend({
        templateName: 'gamehub',

        model: function() {
            return this.store.find('game');
        }
    });

    Cs.GameHubViewRoute = Ember.Route.extend({

        templateName: 'gamehub_view',

        model: function (params) {
            return this.store.find('game', params.game_id);
        }
    });

    Cs.GameHubEditRoute = Ember.Route.extend({

        templateName: 'gamehub_edit',

        model: function (params) {
            return this.store.find('game', params.game_id);
        },

        setupController: function(controller, model) {
            this._super(controller, model);
            this.store.find('gameLocation').then(function (locations) {
                controller.set('gameLocations', locations);
            });
        }

        // deactivate: function () {
        //     var model = this.get('controller.model');

        //     console.log(model.get('isNew') ? 'isNew': 'isSaved');
        //     // if (model.)

        // }

    });

    Cs.GameHubNewRoute = Ember.Route.extend({

        controllerName: 'gameHub.edit',
        templateName: 'gamehub_edit',

        model: function () {
            return this.store.createRecord('game');
        },

        setupController: function(controller, model) {
            this._super(controller, model);
            this.store.find('gameLocation').then(function (locations) {
                controller.set('gameLocations', locations);
            });
        }

    });

    Cs.GameHubSettingsRoute = Ember.Route.extend({

        templateName: 'gamehub_settings',

        // model: function () {
        //     // return this.store.createRecord('game');
        // }

        setupController: function(controller, model) {
            this._super(controller, model);
            controller.set('locations', this.store.find('gameLocation'));
        }

    });

    // Cs.UserIndexRoute = Ember.Route.extend({

    //     templateName: 'user'

    //     // setupController: function(controller, model) {
    //     //     this._super(controller, model);
    //     // }

    // });

    // Cs.UserEditRoute = Ember.Route.extend({

    //     controllerName: 'user.edit',
    //     templateName: 'user/edit',

    //     setupController: function(controller, model) {
    //         console.log('!!!!!!!!!!!');
    //         this._super(controller, model);
    //     }

    // });

    Cs.FoodplansRoute = Ember.Route.extend({

        renderTemplate: function() {
            this.render('foodplans');

            this.render('foodplans_foods', {
                into: 'foodplans',
                outlet: 'left',
                controller: 'foodplans.foods'
            });
        },

    });

    Cs.FoodplansIndexRoute = Ember.Route.extend({
        model: function() {
            return Cs.Foodplan.findAll();
        },

        renderTemplate: function() {
            this.render('foodplans_index',
                {
                    outlet: 'right'
            });

            // this.render('foodplans_foods', {
            //     outlet: 'left',
            //     controller: 'foodplans.foods'
            // });
        },


        setupController: function(controller, model) {
            this._super(controller, model);

            // Cs.PendingAuth.findAll().then(function (pendings) {
            //     controller.set('pendingAuths', pendings);
            // });

            // Cs.User.findAll().then(function (users) {
            //     controller.set('users', users);
            // });

        }

    });

    Cs.FoodplansNewRoute = Ember.Route.extend({
        controllerName: 'foodplans_edit',

        model: function() {
            return Cs.Foodplan.create({
            });
        },

        // templateName: 'foodplans_edit',

        renderTemplate: function() {
            this.render('foodplans_edit', {
                outlet: 'right'
            });
        },


        setupController: function(controller, model) {
            this._super(controller, model);
        }

    });

    Cs.FoodplansEditRoute = Ember.Route.extend({

        model: function(params) {
            return Cs.Foodplan.find(params.plan_id);
        },

        renderTemplate: function() {
            this.render('foodplans_edit', {
                outlet: 'right'
            });
        },

        serialize: function(model) {
            return { plan_id: model.get('guid')};
        },


        setupController: function(controller, model) {
            this._super(controller, model);
        },

        actions: {
            error: function(error/*, transition*/) {
                console.debug(error);
                this.transitionTo('notfound');
            }
        }

    });

    Cs.FoodsRoute = Ember.Route.extend({
        // model: function() {
        //     return this.store.find('game');
        // }

        renderTemplate: function() {
            this.render('foodplans_foods',
                {
                    outlet: 'left'
                });
        },


        setupController: function(controller, model) {
            this._super(controller, model);

            // Cs.PendingAuth.findAll().then(function (pendings) {
            //     controller.set('pendingAuths', pendings);
            // });

            // Cs.User.findAll().then(function (users) {
            //     controller.set('users', users);
            // });

        }

    });

    Cs.FoodsIndexRoute = Ember.Route.extend({
        // model: function() {
        //     return this.store.find('game');
        // }

        renderTemplate: function() {
            this.render('foodplans_foods_index', {
                outlet: 'food'
            });
        },


        setupController: function(controller, model) {
            this._super(controller, model);

            // Cs.PendingAuth.findAll().then(function (pendings) {
            //     controller.set('pendingAuths', pendings);
            // });

            // Cs.User.findAll().then(function (users) {
            //     controller.set('users', users);
            // });

        }

    });

} (window.Ember, window.Cseroldal));
