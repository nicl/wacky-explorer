/** @jsx React.DOM */

var React = require('react');

var HelpBox = React.createClass({

    propTypes: {
        content: React.PropTypes.object.isRequired, // react component
        onRemove: React.PropTypes.func.isRequired,
        isVisible: React.PropTypes.bool.isRequired
    },

    render: function () {
        var classes = ['help', 'help-box'];

        classes.push(this.props.isVisible ? 'show' : 'hide');

        return (
            <div className={classes.join(' ')}>
                {this.props.content}
                <a className='close' onClick={this.props.onRemove}>
                    <span className="glyphicon glyphicon-remove"></span>
                </a>
            </div>
        );
    }
});

module.exports = HelpBox;
