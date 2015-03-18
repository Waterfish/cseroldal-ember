(function (Ember, Cs, undefined) {
    'use strict';

    // Inspiration: http://embersherpa.com/articles/crud-example-app-without-ember-data/

    Cs.Model = Ember.Object.extend({
        init: function() {

            var _this = this;
            // // make sure that class has a storageKey property, otherwise throw an error
            // // storageKey is the key that's used in localStorage
            if (Ember.isNone(this.constructor.path)) {
                throw new Error(Ember.String.fmt('%@ has to implement path property', [this]));
            }
            // if (Em.isNone(this.get('guid'))) {
            //     // guid is null when item is being created
            //     // set the guid for this item to new guid
            //     this.set( 'guid', guid() );
            // }
            this.onValueChange = Cs.FirebaseRef.child(this.constructor.path + this.guid).on('value', function (snapshot) {
                if(snapshot.exists()) {
                    var item = _this.setProperties(snapshot.val());
                } else {
                    // TODO not exist
                    console.log(Ember.String.fmt('%@ snapshot removed on the backend?.', [_this.constructor.path + _this.guid]));
                }
            });

        },

        destroy: function () {
            Cs.FirebaseRef.child(this.constructor.path + this.guid).off('value', this.onValueChange);
            this._super();
        },
        // default guid
        guid: null,
        serialize: function() {
            // Our presistance layer doesn't know about the fields that custom models need to preserve
            // for this reason, we need a serialize function that will return a version of this model
            // that can be saved to localStorage
            throw new Error(Ember.String.fmt('%@ has to implement serialize() method which is required to convert it to JSON.', [this]));
        }
    });

    // static value
    Cs.Model.reopenClass({
        path: null,
        find: function (id) {
            var _this = this;

            // inspiration: https://hackhands.com/3-ways-ember-js-leverages-promises/
            return new Ember.RSVP.Promise(function (resolve, reject) {
                Cs.FirebaseRef.child(_this.path + id).once('value', function (snapshot) {
                    if(snapshot.exists()) {
                        var item = _this.create({guid: id});
                        item.setProperties(snapshot.val());
                        // Resolve promise with the created item
                        resolve(item);
                    } else {
                        // TODO not exist
                        reject(Ember.String.fmt('%@ item not found.', [_this.path + id]));
                    }
                });
            });
        },

        findAll: function () {
            var _this = this;

            // inspiration: https://hackhands.com/3-ways-ember-js-leverages-promises/
            return new Ember.RSVP.Promise(function (resolve, reject) {
                var items = [];

                Cs.FirebaseRef.child(_this.path).once('value', function (snapshot) {
                    if(snapshot.exists()) {
                        Ember.$.each(snapshot.val(), function (key, element) {
                            var item = _this.create({guid: key});
                            item.setProperties(element);
                            items.push(item);
                        });
                        // Resolve promise with the array
                        resolve(items);

                        _this.makeLiveCollection(items);
                    } else {
                        // TODO not exist
                        reject(Ember.String.fmt('%@ collection not found.', [_this.path]));
                    }
                });


            });
        },

        makeLiveCollection: function (collection) {
            // TODO HANDLE DESTROY

            var _this = this;

            Cs.FirebaseRef.child(this.path).on('child_added', function (childSnapshot, prevChildName) {
                var key = childSnapshot.key(),
                    element = childSnapshot.val(),
                    existing = collection.findBy('guid', key),
                    item;

                if (!existing) {
                    item = _this.create({guid: key});
                    item.setProperties(element);
                    collection.addObject(item);
                }

            });

            Cs.FirebaseRef.child(this.path).on('child_removed', function (oldChildSnapshot) {
                var key = oldChildSnapshot.key(),
                    existing = collection.findBy('guid', key);

                collection.removeObject(existing);
            });

        }
    });

} (window.Ember, window.Cseroldal));
