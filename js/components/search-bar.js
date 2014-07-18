/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');

var SearchBar = React.createClass({

    onChange: function (event) {
        Actions.updateSearchInput(event.target.value);
    },

    propTypes: {
        searchInput: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div className="search-bar">
                <input
                    onChange={this.onChange}
                    value={this.props.searchInput}
                    placeholder='Search content...'
                />
            </div>
        );
    }

});

module.exports = SearchBar;
