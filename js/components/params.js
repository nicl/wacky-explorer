/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');

var NAME = 'name';
var VALUE = 'value';

var Param = React.createClass({

    propTypes: {
        param: React.PropTypes.object.isRequired
    },

    onFocus: function () {
        Actions.focusParam(this.props.param);
    },

    onBlur: function () {
        Actions.blur(this.props.param);
    },

    onChange: function (event) {
        Actions.updateParam({ name: this.props.name, value: event.target.value });
    },

    remove: function () {
        Actions.removeParam(this.props.param);
    },

    render: function () {
        return (
            <div className="param">
                <label>
                    {this.props.param.name}
                    <input
                        className="param-value"
                        value={this.props.param.value}
                        placeholder="value..."
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                />
                </label>
                <a onClick={this.remove}>Close</a>
            </div>
        );

    }
});

var ParamsAdder = React.createClass({

    addParam: function () {
        var name = this.refs.addInput.getDOMNode().value;
        Actions.addParam({ name: name, value: '' });
    },

    onChange: function (event) {
        Actions.updateParamSearch(event.target.value);
    },

    onFocus: function () {
        var value = this.refs.addInput.getDOMNode().value;
        Actions.focusParamSearch(value);
    },

    onBlur: function () {
        Actions.blur(this.props.param);
    },

    render: function () {
        return (
            <div className="params-adder">
                <input
                    ref="addInput"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    value={this.props.paramSearch}
                />
                <a onClick={this.addParam}>Add param</a>
            </div>
        );
    }
});

var Params = React.createClass({

    propTypes: {
        params: React.PropTypes.array.isRequired,
        paramSearch: React.PropTypes.string.isRequired,
        parameters: React.PropTypes.array.isRequired
    },

    render: function () {
        var listItems = this.props.params.map(function(p) {
            return <li key={p.name} className="param"><Param param={p} /></li>;
        });

        return (
            <div className="params">
                <ul className="params-list">{listItems}</ul>
                <ParamsAdder paramSearch={this.props.paramSearch} />
            </div>
        );
    }
});

module.exports = Params;
