(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.GameLocation = DS.Model.extend({
        label: DS.attr('string'),
        games: DS.hasMany('game')
    });


    Cseroldal.GameLocationAdapter = Cseroldal.ApplicationAdapter.extend({
        pathForType: function() {
            return 'game-db/location';
        }
    });

} (window.Ember, window.Cseroldal, window.DS));
