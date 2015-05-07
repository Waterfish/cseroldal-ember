(function (Ember, Cs, undefined) {
    'use strict';

    Cs.ChosenView = Ember.Select.extend({

        // chosen attributes
        noResultText: 'Hoppá, nincs találat!',
        maxSelect: 1,

        placeholderTextMultiple: undefined,
        placeholderTextSingle: undefined,

        didInsertElement: function () {
            var _this = this;

            this.$().chosen({
                // todayHighlight: true,
                no_results_text: this.noResultText,
                max_selected_options: this.maxSelect,
                placeholder_text_multiple: this.placeholderTextMultiple,
                placeholder_text_single: this.placeholderTextSingle
            });

        },

        willDestroyElement: function(){
            // do cleanup if needed
            this._super();
        },

        _updateSelect: function () {

            Ember.$(this.element)
                .trigger('chosen:updated');

        }.observes('value')

    });

} (window.Ember, window.Cseroldal));
