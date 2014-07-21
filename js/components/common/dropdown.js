/** @jsx React.DOM */

var React = require('react');

var Dropdown = React.createClass({

    getInitialState: function() {
        return { displayMenu: false };
    },

    toggleMenuDisplay: function() {
        this.setState({ displayMenu: ! this.state.displayMenu });
    },

    propTypes: {
        active: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired,

        // an option is like: { key: 'some-id', text: 'Some text' }
        options: React.PropTypes.array.isRequired
    },

    render: function () {
        var dropdownOptions;
        var classes = ['dropdown'];
        var that = this;
        var caret = <span className='caret' />;

        classes.push(this.state.displayDropdown ? 'open' : 'closed');

        dropdownOptions = this.props.options.map(function (option) {
            return (
                <li>
                    <a
                        onClick={that.props.onClick.bind(null, option.key)}
                        children={option.text}
                    />
                </li>
            );
        });

        return (
            <div className={classes.join(' ')} >
                <button className='dropdown-toggle'>
                    {this.props.active.text}
                </button>
                <ul className='dropdown-menu'>
                    {dropdownOptions}
                </ul>
            </div>

        );
    }
});

module.exports = Dropdown;
