(function (Ember, Cs, undefined) {
    'use strict';

    var ref = Cs.FirebaseRef;

    // Inspiration: http://embersherpa.com/articles/crud-example-app-without-ember-data/

    Cs.Model = Ember.Object.extend({
        init: function() {

            var _this = this;
            // make sure that class has a path and a ref property, otherwise throw an error
            // path is the key that's used in localStorage
            if (Ember.isNone(this.constructor.path)) {
                throw new Error(Ember.String.fmt('%@ has to implement path property', [this]));
            }
            if (Ember.isNone(this.constructor.ref)) {
                throw new Error(Ember.String.fmt('%@ has to implement ref property', [this]));
            }

            if (Em.isNone(this.get('guid'))) {
                // pass
            } else {
                this.constructor.ref.child(this.guid).on('value', this.onValueChange, this);
            }

        },

        destroy: function () {
            this.constructor.ref.child(this.guid).off('value', this.onValueChange);
            this._super();
        },
        // default guid
        guid: null,

        onValueChange: function (snapshot) {
            if(snapshot.exists()) {
                var item = this.setProperties(snapshot.val());
            } else {
                // TODO not exist
                console.log(Ember.String.fmt('%@ snapshot removed on the backend?.', [this.constructor.path + this.guid]));
                this.destroy();
            }
        },

        save: function () {
            var _this = this;
            return new Ember.RSVP.Promise(function (resolve, reject) {
                if (Em.isNone(_this.get('guid'))) {
                    var newRef = _this.constructor.ref.push(_this._serialize(), function (err) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(_this);
                    });

                    // TODO remove this
                    console.log(newRef.toString());

                    _this.set('guid', newRef.key());
                    newRef.on('value', _this.onValueChange, _this);
                } else {
                    _this.constructor.ref.child(_this.guid).update(_this._serialize(), function (err) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(_this);
                    });
                }
            });

        },

        remove: function () {
            if (Em.isNone(this.get('guid'))) {
                this.destroy();
            } else {
                this.constructor.ref.child(this.guid).remove();
            }

        },

        _serialize: function() {
            // Our presistance layer doesn't know about the fields that custom models need to preserve
            // for this reason, we need a serialize function that will return a version of this model
            // that can be saved to localStorage
            throw new Error(Ember.String.fmt('%@ has to implement _serialize() method which is required to convert it to JSON.', [this]));
        }
    });

    // static value
    Cs.Model.reopenClass({
        path: null,
        ref: null,
        find: function (id) {
            var _this = this;

            // inspiration: https://hackhands.com/3-ways-ember-js-leverages-promises/
            return new Ember.RSVP.Promise(function (resolve, reject) {
                _this.ref.child(id).once('value', function (snapshot) {
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

                _this.ref.once('value', function (snapshot) {
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

            this.ref.on('child_added', function (childSnapshot, prevChildName) {
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

            this.ref.on('child_removed', function (oldChildSnapshot) {
                var key = oldChildSnapshot.key(),
                    existing = collection.findBy('guid', key);

                collection.removeObject(existing);
            });

        }
    });

} (window.Ember, window.Cseroldal));
