(function (Ember, Cs, undefined) {
    'use strict';

    // Inspiration: http://embersherpa.com/articles/crud-example-app-without-ember-data/

    Cs.Model = Ember.Object.extend({
        init: function() {

            // make sure that class has a path and a ref property, otherwise throw an error
            // path is the key that's used in localStorage
            if (Ember.isNone(this.constructor.path)) {
                throw new Error(Ember.String.fmt('%@ has to implement path property', [this]));
            }
            if (Ember.isNone(this.constructor.ref)) {
                throw new Error(Ember.String.fmt('%@ has to implement ref property', [this]));
            }

            if (Ember.isNone(this.get('guid'))) {
                // pass
            } else {
                this.constructor.ref.child(this.guid).on('value', this.onValueChange, this);
            }

        },

        destroy: function () {
            // console.log('Element destroying', this.guid);

            this.constructor.ref.child(this.guid).off('value', this.onValueChange);
            this._super();
        },
        // default guid
        guid: null,

        onValueChange: function (snapshot) {
            if(snapshot.exists()) {
                this.setProperties(snapshot.val());
            } else {
                // TODO not exist
                // console.log(Ember.String.fmt('%@ snapshot removed on the backend?.',
                // [this.constructor.path + this.guid]));
                this.destroy();
            }
        },

        save: function (key) {
            var _this = this,
                ref = this.constructor.ref;
            return new Ember.RSVP.Promise(function (resolve, reject) {
                if (Ember.isNone(_this.get('guid'))) {
                    var newRef;

                    if (key) {
                        newRef = ref.child(key);
                        newRef.set(_this._serialize(), function (err) {
                            if (err) {
                                reject(err);
                                return;
                            }
                            resolve(_this);
                        });
                    } else {
                        newRef = ref.push(_this._serialize(), function (err) {
                            if (err) {
                                reject(err);
                                return;
                            }
                            resolve(_this);
                        });
                    }

                    _this.set('guid', newRef.key());
                    newRef.on('value', _this.onValueChange, _this);
                } else {
                    ref.child(_this.guid).update(_this._serialize(), function (err) {
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
            if (Ember.isNone(this.get('guid'))) {
                this.destroy();
            } else {
                this.constructor.ref.child(this.guid).remove();
            }

        },

        _serialize: function() {
            // Our presistance layer doesn't know about the fields that custom
            // models need to preserve for this reason, we need a serialize
            // function that will return a version of this model that can
            // be saved to localStorage
            throw new Error(
                Ember.String.fmt(['%@ has to implement _serialize() method which',
                    ' is required to convert it to JSON.'].join(''), [this]));
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
            return new Ember.RSVP.Promise(function (resolve/*, reject*/) {
                var items = [];

                _this.ref.once('value', function (snapshot) {
                    if(snapshot.exists()) {
                        Ember.$.each(snapshot.val(), function (key, element) {
                            var item = _this.create({guid: key});
                            item.setProperties(element);
                            items.push(item);
                        });
                    } else {
                        // TODO not exist
                        // console.log(Ember.String.fmt('%@ collection not found.', [_this.path]));
                    }

                    // Resolve promise with the array
                    resolve(items);

                    _this.makeLiveCollection(items);

                });


            });
        },

        makeLiveCollection: function (collection) {
            // TODO HANDLE DESTROY

            var _this = this;

            this.ref.on('child_added', function (childSnapshot/*, prevChildName*/) {
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
