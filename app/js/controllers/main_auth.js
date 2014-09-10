(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.AuthController = Ember.Controller.extend({
        authed: false,
        currentUser: null,

        init: function () {
            this.authClient = new FirebaseSimpleLogin(Cseroldal.FirebaseRef, function(error, user) {
                if (error) {
                    console.log('Authentication failed: ' + error);
                } else if (user) {
                    this.set('authed', true);

                    debugger;

                    // var userRef = new Firebase(Cseroldal.FirebaseUserPath + '/' + user.username);
                    // var controller = this;
                    // var properties = {
                    //     id: githubUser.username,
                    //     name: githubUser.username,
                    //     displayName: githubUser.displayName,
                    //     avatarUrl: githubUser.avatar_url,
                    // };

                    // userRef.once('value', function(snapshot) {

                    //     if (!snapshot.val().votesLeft) {
                    //         properties.votesLeft = 10;
                    //     } else {
                    //         properties.votesLeft = snapshot.val().votesLeft;
                    //     }
                    //     var user = App.User.create({ ref: userRef });
                    //     user.setProperties(properties);
                    //     controller.set('currentUser', user);
                    // });
                } else {
                    this.set('authed', false);
                }
            }.bind(this)); // attach login and logout event handlers ?
        },

        login: function () {
            this.authClient.login('github');
        },

        logout: function () {
            this.authClient.logout();
        },

        createUser: function (email, password, callback) {
            this.authClient.createUser(email, password, callback);
        },

        removeUser: function (email, password, callback) {
            this.authClient.removeUser(email, password, callback);
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
