(function (Ember, Cseroldal, Firebase, FirebaseSimpleLogin, undefined) {
    'use strict';

    Cseroldal.RegisterController = Ember.Controller.extend({

        actions: {
            register: function () {
                this.get('auth').createUser(this.get('email'), this.get('password'), function (error, user) {
                    if (error === null) {
                        console.log('Success: ', user);
                    } else {
                        console.warn('Error creating user: ', error);

                        // TODO handle this
                    }
                });
            },

            unregister: function () {
                this.get('auth').removeUser(this.get('email'), this.get('password'), function(error) {
                    if (error === null) {
                        console.log("User removed successfully");
                    } else {
                        console.log("Error removing user:", error);
                    }
                });
            }
        },

        init: function() {
        }

    });

} (window.Ember, window.Cseroldal, window.Firebase, window.FirebaseSimpleLogin));
