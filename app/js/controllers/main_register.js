(function (Ember, Cs, undefined) {
    'use strict';

    Cs.RegisterController = Ember.Controller.extend({

        actions: {
            subscribe: function () {
                var _this = this,
                    auth = this.get('auth'),
                    email = this.get('email'),
                    name = this.get('name'),
                    password = this.get('password'),
                    message = this.get('message');

                // TODO check if already exist
                // TODO check if already pending

                auth.createUser({
                    email: email,
                    password: password
                }, function (error, userData) {

                    if (error) {
                        switch (error.code) {
                        case 'EMAIL_TAKEN':
                            ohSnap('Hiba történt!', 'red', 'error');
                            console.log('The new user account cannot be created because the email is already in use.');
                            break;
                        case 'INVALID_EMAIL':
                            ohSnap('Hiba történt!', 'red', 'error');
                            console.log('The specified email is not a valid email.');
                            break;
                        default:
                            ohSnap('Hiba történt!', 'red', 'error');
                            console.log('Error creating user:', error);
                        }
                    } else {
                        Cs.PendingAuth.create({
                            userName: name,
                            email: email,
                            message: message,
                            auth: {
                                uid: userData.uid
                            }
                        }).save(userData.uid).then(function () {
                            ohSnap('Sikeres küldés!', 'green', 'info');
                            _this.set('submitted', true);
                        }, function () {
                            auth.removeUser({
                                email: email,
                                password: password
                            });
                            ohSnap('Hiba történt!', 'red', 'error');
                        });

                    }
                });

            }
        },

        formInvalid: true,

        checkPassword: function () {

            var password = this.get('password'),
                passwordCheck = this.get('password_check'),
                different = password !== passwordCheck;

            console.log('formInvalid', different);

            this.set('formInvalid', password.length() < 8 && different);

        }.observes('password', 'password_check')

    });

} (window.Ember, window.Cseroldal));
