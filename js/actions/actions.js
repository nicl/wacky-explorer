var Dispatcher = require('../dispatcher/dispatcher');

var Actions = {

    constants: {
        FOCUS_PARAM: 'focus-param',
        FOCUS_PARAM_SEARCH: 'focus-param-search',
        BLUR: 'blur',

        ADD_PARAM: 'add-param',
        UPDATE_PARAM: 'update-param',
        REMOVE_PARAM: 'remove-param',

        UPDATE_SEARCH_INPUT: 'update-search-input',

        UPDATE_ENDPOINT: 'update-endpoint'
    },


    focusParam: function (param) {
        Dispatcher.handleAction({
            action: this.constants.FOCUS_PARAM,
            data: param
        });
    },

    focusParamSearch: function (value) {
        Dispatcher.handleAction({
            action: this.constants.FOCUS_PARAM_SEARCH,
            data: value,
        });
    },

    blur: function () {
        Dispatcher.handleAction({
            action: this.constants.BLUR,
            data: null
        });
    },

    addParam: function (param) {
        Dispatcher.handleAction({
            action: this.constants.ADD_PARAM,
            data: param
        });
    },

    updateParam: function (param) {
        Dispatcher.handleAction({
            action: this.constants.UPDATE_PARAM,
            data: param
        });
    },

    removeParam: function (param) {
        Dispatcher.handleAction({
            action: this.constants.REMOVE_PARAM,
            data: param
        });
    },

    updateSearchInput: function (value) {
        Dispatcher.handleAction({
            action: this.constants.UPDATE_SEARCH_INPUT,
            data: value
        });
    },

    updateEndpoint: function (value) {
        Dispatcher.handleAction({
            action: this.constants.UPDATE_ENDPOINT,
            data: value
        });
    }
};

module.exports = Actions;
