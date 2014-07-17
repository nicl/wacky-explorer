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
        this.setState({ focusType: NAME, focusParam: data });
    },

    setValueIsActive: function (data) {
        this.setState({ focusType: VALUE, focusParam: data });
    },

    setNoneIsActive: function (data) {
        this.setState({ focusType: null, focusParam: null });
    },

    setFocusParam: function (data) {
        this.setState({ focusParam: data });
    },

    nameHints: function (data) {
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

    getInitialState: function () {
        return {
            focusType: null,
            focusParam: null,
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
            case Actions.constants.UPDATE_PARAM:
                that.setFocusParam(action.data);
                break;
            }
        });
    },

    render: function () {
        var hints;

        if (this.state.focusType === NAME) {
            hints = this.nameHints(this.state.focusParam);
        } else if (this.state.focusType === VALUE) {
            hints = this.valueHints(this.state.focusParam);
        } else {
            hints = this.noHints();
        }

        return <div className="help">{hints}</div>;
    }
});

module.exports = Help;
