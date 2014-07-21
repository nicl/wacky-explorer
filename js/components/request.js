/** @jsx React.DOM */

var React = require('react');

var Request = React.createClass({

    propTypes: {
        request: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            <div className="request">
                <a
                    href={this.props.request}
                    target='_blank'
                    children={this.props.request}
                />
            </div>
        );
    }

});

module.exports = Request;
