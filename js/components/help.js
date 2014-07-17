/** @jsx React.DOM */

var React = require('react');
var Dispatcher = require('../dispatcher/dispatcher');
var Actions = require('../actions/actions');

var NAME = 'name';
var VALUE = 'value';

var Help = React.createClass({

    // Return contextual help:
    //   - param names with descriptions if entering a param name
    //   - valid values if typing in values + description too
    //   - starting help otherwise

    setNameIsActive: function (data) {
        this.setState({ focusType: NAME, focusData: data });
    },

    setValueIsActive: function (data) {
        this.setState({ focusType: VALUE, focusData: data });
    },

    setNoneIsActive: function (data) {
        this.setState({ focusType: null, focusData: null });
    },

    nameHints: function (data) {
        var options = ['section', 'tag', 'show-most-viewed'];

        var listItems = options.map(function(item) {
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

    getInitialState: function () {
        return {
            focusType: null,
            focusData: null, // expected to have name and value
        };
    },

    componentDidMount: function () {
        var that = this;

        Dispatcher.addActionListener(function (action) {
            switch (action.action) {
            case Actions.constants.FOCUS_NAME:
                that.setNameIsActive(action.data);
                break;
            case Actions.constants.FOCUS_VALUE:
                that.setValueIsActive(action.data);
                break;
            case Actions.constants.BLUR:
                that.setNoneIsActive();
                break;
            }
        });
    },

    render: function () {
        var hints;

        if (this.state.focusType === NAME) {
            hints = this.nameHints(this.state.focusData);
        } else if (this.state.focusType === VALUE) {
            hints = this.valueHints(this.state.focusData);
        } else {
            hints = this.noHints();
        }

        return <div className="help">{hints}</div>;
    }
});

module.exports = Help;
