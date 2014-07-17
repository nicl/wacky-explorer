var withEventListener = require('../utils/event-listener');

var PARAM = 'param';
var PARAM_SEARCH = 'param-search';

var Store = function () {
    // A list of selected params, of the form:
    //
    // { name: 'section', value: 'football' }
    this.params = [];

    // The item currently focused:
    //
    // {
    //     type: PARAM | PARAM_SEARCH,
    //     data: param | value
    // }
    this.hasFocus = null;

    // Input for the param add/search input (a string)
    this.paramSearch = '';

    withEventListener(this);
};

Store.prototype.addParam = function (param) {
    this.params.push(param);
    this.paramSearch = '';
    this.notifyAll();
};

Store.prototype.update = function (param) {
    this.params = this.params.map(function (p) {
        if (p.name === param.name) return param;
        else return p;
    });

    if (this.hasFocus.type === PARAM) {
        this.hasFocus.data = param;
    }

    this.notifyAll();
};

Store.prototype.removeParam = function (param) {
    this.params = this.params.filter(function (p) {
        return param.name !== p.name;
    });

    this.notifyAll();
};

Store.prototype.setFocus = function (type, data) {
    this.hasFocus = { type: type, data: data };
    this.notifyAll();
};

Store.prototype.removeFocus = function () {
    this.hasFocus = null;
    this.notifyAll();
};

Store.prototype.updateParamSearch = function (value) {
    this.paramSearch = value;

    if (this.hasFocus.type === PARAM_SEARCH) {
        this.hasFocus.data = value;
    }

    this.notifyAll();
};

module.exports = Store;
