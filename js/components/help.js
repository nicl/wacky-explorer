/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');

var PARAM = 'param';
var PARAM_SEARCH = 'param-search';

var Help = React.createClass({

    // Return contextual help:
    //   - param names with descriptions if entering a param name
    //   - valid values if typing in values + description too
    //   - starting help otherwise

    paramSearchHints: function (parameters, data) {
        var options = parameters;
        var filtered;

        if (data === '') {
            filtered = options;
        } else {
            filtered = options.filter(function (option) {
                return option.name.match(data);
            });
        }

        var listItems = filtered.map(function(p) {
            return <li key={p.name} className="help-option">{p.name}</li>;
        });

        return <ul className="help-options">{listItems}</ul>;
    },

    valueHints: function (parameters, data) {
        var paramData = parameters.filter(function (p) {
            return p.name === data.name;
        });

        return paramData[0].description;
    },

    noHints: function () {
        // TODO possibly a general description ('start typing...')
        return null;
    },

    propTypes: {
        hasFocus: React.PropTypes.object,
        parameters: React.PropTypes.array.isRequired
    },

    render: function () {
        var hints;
        var parameters = this.props.parameters;
        var hasFocus = this.props.hasFocus || {};
        var focusType = hasFocus.type;
        var focusData = hasFocus.data;

        if (focusType === PARAM_SEARCH) {
            hints = this.paramSearchHints(parameters, focusData);
        } else if (focusType === PARAM) {
            hints = this.valueHints(parameters, focusData);
        } else {
            hints = this.noHints();
        }

        return <div className="help">{hints}</div>;
    }
});

module.exports = Help;
