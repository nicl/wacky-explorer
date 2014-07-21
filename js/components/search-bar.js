/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');
var Dropdown = require('../components/common/dropdown');

var SearchBar = React.createClass({

    onChange: function (event) {
        Actions.updateSearchInput(event.target.value);
    },

    propTypes: {
        searchInput: React.PropTypes.string.isRequired
    },

    changeEndpoint: function (endpoint) {},

    render: function () {
        var options = [
            {
                key: 'content',
                text: 'Search content'
            },
            {
                key: 'item',
                text: 'Path lookup'
            }
        ];

        return (
            <div className="search-bar">
                <input
                    onChange={this.onChange}
                    value={this.props.searchInput}
                    placeholder='Search content...'
                />
                <Dropdown
                    active={{key: 'content', text: 'Search content'}}
                    options={options}
                    onClick={this.changeEndpoint}
                />
            </div>
        );
    }

});

module.exports = SearchBar;
