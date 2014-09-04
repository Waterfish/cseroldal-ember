(function (Ember, Cseroldal, DS, undefined) {
    'use strict';

    Cseroldal.Game = DS.Model.extend({
        title: DS.attr('string'),
        shortDescription: DS.attr('string'),
        description: DS.attr('string')
    });

    Cseroldal.GameAdapter = Cseroldal.ApplicationAdapter.extend({
      pathForType: function() {
        return 'game-db/games';
      }
    });

    Cseroldal.Location = DS.Model.extend({
        title: DS.attr('string'),
        shortDescription: DS.attr('string'),
        description: DS.attr('string')
    });

    Cseroldal.Game.FIXTURES = [
     {
       id: 1,
       title: 'Western gunfight',
       shortDescription: 'We are cowboys, our right hand is the gun, left hand is on our back and that is our weak point. You kill other players by touching with your \"gun\" their weak point.',
       description: 'We are cowboys, our right hand is the gun, left hand is on our back and that is our weak point. You kill other players by touching with your \"gun\" their weak point.'
     },
     {
       id: 2,
       title: 'Find the object',
       shortDescription: 'Object is hidden in the room, everybody is trying to find it.',
       description: 'One scout is selected, who will hide the object. Object should be hidden just so it is not easily visible, but must be spottable without moving other objects. Everybody enters the room and begin searching for the object. When somebody spots the object, he/she should sit down without helping the others where is the object. Game last until the last scout found the object, then the first scout who sit down can hide the object.'
     },
     {
       id: 3,
       title: 'Tagging',
       shortDescription: null, //'Select an It, he must catch other players. Who is catched becomes the catcher.',
       description: 'Select an It, he must catch other players. Who is catched becomes the catcher.'
     }
    ];

} (window.Ember, window.Cseroldal, window.DS));
