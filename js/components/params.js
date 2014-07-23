/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/actions');
var $ = require('jquery');
require('jquery-ui/datepicker');

window.jQuery = $; // hack to make typeahead work
require('typeahead.js');

var _ = require('underscore');

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
                        placeholder="value..."
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        type={this.props.paramInfo.type || 'text' }
                />
                </label>
                <a className='close' onClick={this.remove}>
                    <span className="glyphicon glyphicon-remove"></span>
                </a>
            </div>
        );

    }
});

var ParamsAdder = React.createClass({

    addParam: function () {
        var name = this.refs.addInput.getDOMNode().value;
        Actions.addParam({ name: name, value: '' });
    },

    selectParam: function () {
        var node = this.refs.addInput.getDOMNode();
        this.addParam();
        $(node).typeahead( 'val', 'a' );
        $(node).typeahead( 'open');
        $(node).typeahead( 'val', '' );
    },

    onFocus: function () {
        var node = this.refs.addInput.getDOMNode();
        $(node).attr('placeholder','');
    },

    onBlur: function () {
        var node = this.refs.addInput.getDOMNode();
        $(node).attr('placeholder','Add params...');
    },

    isValidName: function (name) {
        var isValid = _.find(this.props.parameters, function (p) {
            return p.name === name;
        });

        return isValid;
    },

    onKeyDown: function (event) {
        var name = this.refs.addInput.getDOMNode().value;

        switch (event.keyCode) {
        case ENTER:
            if (this.isValidName(name)) {
                this.selectParam();
            }
            break;
        default:
            break;
        }
    },

    matcher: function (q, cb) {
        var parameters = this.getParameterSet(this.props.parameters,
                                              this.props.params,
                                              this.props.endpoint);

        var matches = parameters.filter(function (p) {
            return p.name.match(q);
        });

        cb(matches);
    },

    getParameterSet: function (parameters, params, endpoint) {
        var filtered = parameters.filter(function (p) {
            var endpointMatch = _.contains(p.endpoints, endpoint.key);
            var usedAlready = _.find(params, function (param) {
                return param.name === p.name;
            });

            return endpointMatch && !usedAlready;
        });

        return filtered;
    },

    propTypes: {
        params: React.PropTypes.array.isRequired,
        parameters: React.PropTypes.array.isRequired,
        endpoint: React.PropTypes.object.isRequired
    },

    addTypeAhead: function () {
        var that = this;
        var node = this.refs.addInput.getDOMNode();

        $(node).typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 0
            },
            {
                name: 'parameters',
                displayKey: 'name',
                source: this.matcher,
                templates: {
                    empty: [
                        '<div class="empty-message">',
                        'Unable to find any matching filters.',
                        '</div>'
                    ].join('\n'),
                    suggestion: function (obj) {
                        return '<p class="name">' +
                            obj.name +
                            '</p><p class="teaser">' +
                            obj.teaser +
                            '</p>';
                    }
                }
            }
        ).on('typeahead:selected', function($e, datum) {
            that.selectParam(this);
        }).on('typeahead:autocompleted', function($e, datum) {
            that.selectParam(this);
        })

        // hack to show suggestions when user focus the typeahead input
        $(node).on( 'focus', function () {
            $(this).typeahead( 'val', 'a' );
            $(this).typeahead( 'open');
            $(this).typeahead( 'val', '' );
        });
    },

    componentDidMount: function () {
        this.addTypeAhead();
    },

    render: function () {
        var that = this;

        return (
            <div className="params-adder">
                <input
                    ref="addInput"
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    placeholder='Add params...'
                />
            </div>
        );
    }
});

var Params = React.createClass({

    propTypes: {
        params: React.PropTypes.array.isRequired,
        parameters: React.PropTypes.array.isRequired,
        endpoint: React.PropTypes.object.isRequired
    },

    render: function () {
        var paramInfo;
        var parameters = this.props.parameters;

        var listItems = this.props.params.map(function(p) {
            paramInfo = _.find(parameters, function (pi) {
                return pi.name === p.name;
            });

            return (
                <li key={p.name} className="param">
                    <Param param={p} paramInfo={paramInfo} />
                </li>
            );
        });

        return (
            <div className="params">
                <ul className="params-list">{listItems}</ul>
                <ParamsAdder
                    endpoint={this.props.endpoint}
                    params={this.props.params}
                    parameters={this.props.parameters}
                />
            </div>
        );
    }
});

module.exports = Params;
