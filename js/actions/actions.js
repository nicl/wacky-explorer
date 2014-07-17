var Dispatcher = require('../dispatcher/dispatcher');

var Actions = {

    constants: {
        FOCUS_NAME: 'focus-name',
        FOCUS_VALUE: 'focus-value',
        BLUR: 'blur',

        KEY_UPSERTED: 'key-upserted',
        KEY_REMOVED: 'key-removed'
    },

    focusName: function (name, value) {
        Dispatcher.handleAction({
            action: this.constants.FOCUS_NAME,
            data: { name: name, value: value }
        });
    },

    focusValue: function (name, value) {
        Dispatcher.handleAction({
            action: this.constants.FOCUS_VALUE,
            data: { name: name, value: value }
        });
    },

    blur: function () {
        Dispatcher.handleAction({
            action: this.constants.BLUR,
            data: {}
        });
    },

    keyUpserted: function (name, value) {
        Dispatcher.handleAction({
            action: this.constants.KEY_UPSERTED,
            data: { name: name, value: value }
        });
    },

    keyRemoved: function(name) {
        Dispatcher.handleAction({
            action: this.constants.KEY_REMOVED,
            data: { name: name, value: value }
        });
    }
};

module.exports = Actions;
