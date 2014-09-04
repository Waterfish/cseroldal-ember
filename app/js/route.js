(function (Ember, Cseroldal, undefined) {
    'use strict';
    // App route
    Cseroldal.Router.map(function() {

        this.resource('gameHub', {path: '/'}, function () {
            this.route('view', {path: '/view/:game_id'});
            this.route('edit', {path: '/edit/:game_id'});
            this.route('new', {path: '/new'});
        });

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


} (window.Ember, window.Cseroldal));
