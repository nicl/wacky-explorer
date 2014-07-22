/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');
var Dropdown = require('../components/common/dropdown');

var SearchBar = React.createClass({

    onChange: function (event) {
        Actions.updateSearchInput(event.target.value);
    },

    propTypes: {
        searchInput: React.PropTypes.string.isRequired,
        endpoints: React.PropTypes.array.isRequired,
        activeEndpoint: React.PropTypes.object.isRequired
    },

    changeEndpoint: function (endpoint) {
        Actions.updateEndpoint(endpoint);
    },

    render: function () {
        return (
            <div className="search-bar">
                <input
                    onChange={this.onChange}
                    value={this.props.searchInput}
                    placeholder={this.props.activeEndpoint.hint}
                />
                <Dropdown
                    active={this.props.activeEndpoint}
                    options={this.props.endpoints}
                    onClick={this.changeEndpoint}
                />
            </div>
        );
    }

});

module.exports = SearchBar;
