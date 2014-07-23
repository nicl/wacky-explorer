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

    // Input for giant search bar
    this.searchInput = '';

    // Active endpoint:
    //
    // { key: 'content', text: 'Search content' }
    this.activeEndpoint = null;

    withEventListener(this);
};

Store.prototype.addParam = function (param) {
    this.params.push(param);
    this.notifyAll();
};

Store.prototype.updateParam = function (param) {
    this.params = this.params.map(function (p) {
        if (p.name === param.name) return param;
        else return p;
    });

    if (this.hasFocus && this.hasFocus.type === PARAM) {
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

Store.prototype.updateSearchInput = function (value) {
    this.searchInput = value;
    this.notifyAll();
};

Store.prototype.updateEndpoint = function (value) {
    this.activeEndpoint = value;
    this.notifyAll();
};

module.exports = Store;
