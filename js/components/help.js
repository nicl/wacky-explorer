/** @jsx React.DOM */

var React = require('react');
var Dispatcher = require('../dispatcher/dispatcher');
var Actions = require('../actions/actions');

var PARAM = 'param';
var PARAM_SEARCH = 'param-search';

var Help = React.createClass({

    // Return contextual help:
    //   - param names with descriptions if entering a param name
    //   - valid values if typing in values + description too
    //   - starting help otherwise

    paramSearchHints: function (data) {
        var options = ['section', 'tag', 'show-most-viewed'];
        var filtered;

        if (data.name === '') {
            filtered = options;
        } else {
            filtered = options.filter(function (option) {
                option.match(data.name);
            });
        }

        var listItems = filtered.map(function(item) {
            return <li key={item} className="help-option">{item}</li>;
        });

        return <ul className="help-options">{listItems}</ul>;
    },

    valueHints: function (data) {
        // TODO describe valid values for param
        return null;
    },

    noHints: function () {
        // TODO possibly a general description ('start typing...')
        return null;
    },

    propTypes: {
        hasFocus: React.PropTypes.object.isRequired
    },

    render: function () {
        var hints;
        var hasFocus = this.props.hasFocus || {};
        var focusType = hasFocus.type;
        var focusData = hasFocus.data;

        if (focusType === PARAM_SEARCH) {
            hints = this.paramSearchHints(focusData);
        } else if (focusType === PARAM) {
            hints = this.valueHints(focusData);
        } else {
            hints = this.noHints();
        }

        return <div className="help">{hints}</div>;
    }
});

module.exports = Help;
