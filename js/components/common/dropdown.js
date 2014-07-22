/** @jsx React.DOM */

var React = require('react');

var Dropdown = React.createClass({

    getInitialState: function () {
        return { displayDropdownMenu: false };
    },

    toggleMenuDisplay: function () {
        this.setState({ displayDropdownMenu: ! this.state.displayDropdownMenu });
    },

    selectOption: function (option) {
        this.toggleMenuDisplay();
        this.props.onClick(option);
    },

    propTypes: {
        active: React.PropTypes.object.isRequired,
        onClick: React.PropTypes.func.isRequired,

        // an option is like: { key: 'some-id', text: 'Some text' }
        options: React.PropTypes.array.isRequired
    },

    render: function () {
        var dropdownOptions;
        var classes = ['dropdown'];
        var that = this;
        var caret = <span className='caret' />;

        classes.push(this.state.displayDropdownMenu ? 'open' : 'closed');

        dropdownOptions = this.props.options.map(function (option) {
            return (
                <li key={option.key}>
                    <a
                        onClick={that.selectOption.bind(null, option)}
                        children={option.text}
                    />
                </li>
            );
        });

        return (
            <div className={classes.join(' ')} >
                <button className='dropdown-toggle' onClick={this.toggleMenuDisplay}>
                    {this.props.active.text}
                    {caret}
                </button>
                <ul className='dropdown-menu'>
                    {dropdownOptions}
                </ul>
            </div>

        );
    }
});

module.exports = Dropdown;
