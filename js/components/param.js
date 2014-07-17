/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');

var NAME = 'name';
var VALUE = 'value';

var Param = React.createClass({

    getInitialState: function () {
        return {
            name: '',
            value: '',
        };
    },

    onFocus: function (type, event) {
        if (type === NAME) {
            Actions.focusName(this.state.name, this.state.value);
        } else {
            Actions.focusValue(this.state.name, this.state.value);
        }
    },

    onBlur: function () {
        Actions.blur();
    },

    render: function () {
        return (
            <div className="param">
                <input
                    className="param-key"
                    placeholder="parameter name..."
                    onFocus={this.onFocus.bind(this, NAME)}
                    onBlur={this.onBlur}
                />
                <input
                    className="param-value"
                    placeholder="value..."
                    onFocus={this.onFocus.bind(this, VALUE)}
                    onBlur={this.onBlur}
                />
            </div>
        );

    }
});

module.exports = Param;
