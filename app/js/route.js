(function (Ember, Cseroldal, undefined) {
    'use strict';
    // App route
    Cseroldal.Router.map(function() {

        this.resource('gameHub', {path: '/'}, function () {
            this.route('view', {path: '/view/:game_id'});
            this.route('edit', {path: '/edit/:game_id'});
            this.route('new', {path: '/new'});
            this.route('settings', {path: '/settings'});
        });

        this.route('login');
        this.route('register');

    });

    Ember.Route.reopen({
        beforeModel: function (transition) {

            // These routes you do not need to be logged in to access.
            var openRoutes = ['login', 'register'];

            // Not logged in and attempting to access protected route, redirect to login.
            if (openRoutes.indexOf(transition.targetName) === -1 && Ember.isEmpty(this.get('auth.loginData'))) {
                Ember.Logger.warn('Attempting to access protected route when not logged in. Aborting.');

                // Save the transition to try again status changes.
                this.set('auth.transition', transition);

                // Redirect to login.
                this.transitionTo('login');
            }
        }
    });

    Cseroldal.GameHubRoute = Ember.Route.extend({
        templateName: 'gamehub',

        model: function() {
            return this.store.find('game');
        }
    });

    Cseroldal.GameHubViewRoute = Ember.Route.extend({

        templateName: 'gamehub/view',

        model: function (params) {
            return this.store.find('game', params.game_id);
        }
    });

    Cseroldal.GameHubEditRoute = Ember.Route.extend({

        templateName: 'gamehub/edit',

        model: function (params) {
            return this.store.find('game', params.game_id);
        },

        setupController: function(controller, model) {
            this._super(controller, model);
            controller.set('gameLocations', this.store.find('gameLocation'));
        }

        // deactivate: function () {
        //     var model = this.get('controller.model');

        //     console.log(model.get('isNew') ? 'isNew': 'isSaved');
        //     // if (model.)

        // }

    });

    Cseroldal.GameHubNewRoute = Ember.Route.extend({

        controllerName: 'gameHub.edit',
        templateName: 'gamehub/edit',

        model: function () {
            return this.store.createRecord('game');
        }

    });

    Cseroldal.GameHubSettingsRoute = Ember.Route.extend({

        templateName: 'gamehub/settings',

        // model: function () {
        //     // return this.store.createRecord('game');
        // }

        setupController: function(controller, model) {
            this._super(controller, model);
            controller.set('locations', this.store.find('gameLocation'));
        }

    });


} (window.Ember, window.Cseroldal));
