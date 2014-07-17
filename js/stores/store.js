var withEventListener = require('../utils/event-listener');

var PARAM = 'param';
var PARAM_SEARCH = 'param-search';

var Store = function () {
    // example param:
    //
    // { name: 'section', value: 'football' }
    this.params = [];

    // example hasFocus:
    //
    // {
    //     type: PARAM | PARAM_SEARCH,
    //     data: param | value
    // }
    this.hasFocus = null;

    withEventListener(this);
};

Store.prototype.addParam = function (param) {
    this.params.push(param);
    this.notifyAll();
};

Store.prototype.update = function (param) {
    this.params = this.params.map(function (p) {
        if (p.name === param.name) return param;
        else return p;
    });

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

module.exports = Store;
