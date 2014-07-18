/** @jsx React.DOM */

var React = require('react');

var Request = React.createClass({

    propTypes: {
        domain: React.PropTypes.string.isRequired,
        params: React.PropTypes.array.isRequired,
    },

    render: function () {
        var request = this.props.domain;
        var paramsAsPairs = this.props.params.map(function (p) {
            return p.name + '=' + p.value;
        });

        if (paramsAsPairs.length > 0) {
            request += '?' + paramsAsPairs.join('&');
        }

        return <div className="request">{request}</div>;
    }

});

module.exports = Request;
