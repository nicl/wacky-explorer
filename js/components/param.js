/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');

var NAME = 'name';
var VALUE = 'value';

var Param = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    getInitialState: function () {
        return {
            name: '',
            value: '',
        };
    },

    onFocus: function () {
        Actions.focusName(this.state.name, 'blah');
    },

    onBlur: function () {
        Actions.blur();
    },

    onChange: function () {
        Actions.updateParam(this.props.name, 'blah');
    },

    render: function () {
        return (
            <div className="param">
                <label>
                    {this.props.name}
                    <input
                        className="param-value"
                        placeholder="value..."
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                />
                </label>
            </div>
        );

    }
});

module.exports = Param;
