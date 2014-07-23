/** @jsx React.DOM */

var React = require('react');
var _ = require('underscore');
var AjaxHelper = require('../utils/ajax-helper');
var JsonView = require('../utils/json-view');

var Results = React.createClass({

    loadApiResponse: _.debounce(function (request) {
        var that = this;

        var success = function(data) {
            that.setState({ response: data });
        };

        var error = function(xhr, status, err) {
            that.setState({ response: xhr.responseJSON });
            console.error(request, status, err);
        };

        AjaxHelper.loadJson(request, success, error);
    }, 500),

    propTypes: {
        request: React.PropTypes.string.isRequired
    },

    getInitialState: function () {
        return { response: {} };
    },

    componentDidMount: function () {
        this.loadApiResponse(this.props.request);
    },

    componentWillReceiveProps: function (nextProps) {
        this.loadApiResponse(nextProps.request);
    },

    componentDidUpdate: function() {
        var node = this.getDOMNode();
        JsonView.format(node);
    },

    render: function () {
        return <div className="results json-view">{JSON.stringify(this.state.response)}</div>;
    }

});

module.exports = Results;
