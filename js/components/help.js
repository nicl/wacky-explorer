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
        var filtered, ordered;

        if (data === '') {
            filtered = options;
        } else {
            filtered = options.filter(function (option) {
                return option.name.match(data);
            });
        }

        ordered = filtered.sort(function (a, b) {
            return a.name > b.name ? 1 : -1;
        });

        var listItems = ordered.map(function(p) {
            return <li key={p.name} className="help-option">{p.name}</li>;
        });

        return (
            <div>
                <h3>Available filters</h3>
                <ul className="help-options">{listItems}</ul>
            </div>
        );
    },

    valueHints: function (parameters, data) {
        var paramData = parameters.filter(function (p) {
            return p.name === data.name;
        });

        return (
            <div>
                <h3>{paramData[0].teaser}</h3>
                <div dangerouslySetInnerHTML={{__html: paramData[0].description}} />
            </div>
        );
    },

    welcomeHints: function (help) {
        return (
            <div>
                <h3>{help.title}</h3>
                <div dangerouslySetInnerHTML={{__html: help.description}} />
            </div>
        );

        return
    },

    noHints: function () {
        // TODO possibly a general description ('start typing...')
        return null;
    },

    filterParams: function (parameters, activeParams) {
        var existingNames = activeParams.map(function (p) {
            return p.name;
        });

        return parameters.filter(function (p) {
            return existingNames.indexOf(p.name) === -1;
        });
    },

    propTypes: {
        hasFocus: React.PropTypes.object,
        parameters: React.PropTypes.array.isRequired,
        help: React.PropTypes.object.isRequired,
        params: React.PropTypes.array.isRequired
    },

    getInitialState: function () {
        return { showWelcomeMessage: true };
    },

    render: function () {
        var hints;
        var parameters = this.props.parameters;
        var activeParams = this.props.params;
        var hasFocus = this.props.hasFocus || {};
        var focusType = hasFocus.type;
        var focusData = hasFocus.data;
        var filteredParams = this.filterParams(parameters, activeParams);
        var help = this.props.help;

        if (focusType === PARAM_SEARCH) {
            hints = this.paramSearchHints(filteredParams, focusData);
        } else if (focusType === PARAM) {
            hints = this.valueHints(parameters, focusData);
        } else {
//            hints = this.state.showWelcomeMessage ?
//                this.welcomeHints(help) : this.noHints();

            this.noHints();
        }

        return <div className="help">{hints}</div>;
    }
});

module.exports = Help;
