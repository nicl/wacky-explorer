/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');
var $ = require('jquery');
require('jquery-ui/datepicker');

var NAME = 'name';
var VALUE = 'value';
var ENTER = 13;

var Param = React.createClass({

    propTypes: {
        param: React.PropTypes.object.isRequired,
        paramInfo: React.PropTypes.object.isRequired
    },

    onFocus: function () {
        Actions.focusParam(this.props.param);
    },

    onBlur: function () {
        Actions.blur(this.props.param);
    },

    onChange: function (event) {
        Actions.updateParam({ name: this.props.param.name, value: event.target.value });
    },

    onDatePickerChange: function (value) {
        Actions.updateParam({ name: this.props.param.name, value: value });
    },

    remove: function () {
        Actions.removeParam(this.props.param);
    },

    addDateTimePicker: function () {
        var node = this.refs.input.getDOMNode();
        $(node).datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: this.onDatePickerChange
        });
    },

    componentDidMount: function () {
        switch (this.props.paramInfo.type) {
        case 'datetime':
            this.addDateTimePicker();
            break;
        default:
            break;
        }
    },

    render: function () {
        return (
            <div className="param">
                <label>
                    {this.props.param.name}
                    <input
                        ref='input'
                        id='datepicker'
                        className="param-value"
//                        value={this.props.param.value}
                        placeholder="value..."
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        type={this.props.paramInfo.type || 'text' }
                />
                </label>
                <a className='close' onClick={this.remove}>Remove</a>
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

    onKeyDown: function (event) {
        var name = this.refs.addInput.getDOMNode().value;

        switch (event.keyCode) {
        case ENTER:
            Actions.addParam({ name: name, value: ''});
            Actions.focusParamSearch(''); // to ensure help is refreshed
            break;
        default:
            break;
        }
    },

    render: function () {
        var that = this;
        var inputValid = this.props.parameters.some(function (p) {
            return that.props.paramSearch === p.name;
        });

        return (
            <div className="params-adder">
                <input
                    ref="addInput"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    value={this.props.paramSearch}
                    placeholder='Add filters...'
                    onKeyDown={this.onKeyDown}
                />
                <a
                    onClick={this.addParam}
                    className={inputValid ? 'show' : 'hide'}
                >
                    Add
                </a>
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
        var paramInfo;
        var parameters = this.props.parameters;

        var listItems = this.props.params.map(function(p) {
            paramInfo = parameters.filter(function (pi) {
                return pi.name === p.name;
            });

            return (
                <li key={p.name} className="param">
                    <Param param={p} paramInfo={paramInfo[0]} />
                </li>
            );
        });

        return (
            <div className="params">
                <ul className="params-list">{listItems}</ul>
                <ParamsAdder
                    paramSearch={this.props.paramSearch}
                    parameters={this.props.parameters}
                />
            </div>
        );
    }
});

module.exports = Params;
