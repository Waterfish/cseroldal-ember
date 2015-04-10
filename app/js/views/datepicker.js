(function (Ember, Cs, undefined) {
    'use strict';

    Cs.DatepickerView = Ember.View.extend({
        tagName: 'input',
        attributeBindings: ['disabled', 'type', 'placeholder'],
        type: 'text',
        disabled: false,
        placeholder: 'Insert date',

        didInsertElement: function () {
            var _this = this;

            Ember.$(this.element).datepicker({
                // todayHighlight: true,
                autoclose: true,
                weekStart: 1,
                format: 'yyyy.mm.dd.'
            })
            .on('changeDate', function(e){
                _this.set('value', moment(e.date).toJSON());
            })
            .datepicker('update', moment(this.get('value')).toDate());
        },

        _updateDateWidget: function () {
            Ember.$(this.element).datepicker('update', moment(this.get('value')).toDate());
        }.observes('value')
    });

} (window.Ember, window.Cseroldal));
