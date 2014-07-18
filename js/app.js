/** @jsx React.DOM */

var React = require('react');
var ParametersConfig = require('./config/parameters');
var Store = require('./stores/store');
var Dispatcher = require('./dispatcher/dispatcher');
var Actions = require('./actions/actions');
var Params = require('./components/params');
var Request = require('./components/request');
var Help = require('./components/help');

// components are:
//   app
//   |- search
//      |- param(s)
//   |- help
//   |- results

// NEXT STEP: show help

var PARAM = 'param';
var PARAM_SEARCH = 'param-search';

var App = React.createClass({

    propTypes: {
        store: React.PropTypes.object.isRequired,
        parameters: React.PropTypes.array.isRequired,
        domain: React.PropTypes.string.isRequired,
    },

    componentDidMount: function () {
        var that = this;

        Dispatcher.addActionListener(function (action) {
            switch (action.action) {
            case Actions.constants.ADD_PARAM:
                that.props.store.addParam(action.data);
                break;
            case Actions.constants.UPDATE_PARAM:
                that.props.store.updateParam(action.data);
                break;
            case Actions.constants.REMOVE_PARAM:
                that.props.store.removeParam(action.data);
                break;
            case Actions.constants.FOCUS_PARAM:
                that.props.store.setFocus(PARAM, action.data);
                break;
            case Actions.constants.FOCUS_PARAM_SEARCH:
                that.props.store.setFocus(PARAM_SEARCH, action.data);
                break;
            case Actions.constants.BLUR:
                that.props.store.removeFocus();
                break;
            case Actions.constants.UPDATE_PARAM_SEARCH:
                that.props.store.updateParamSearch(action.data);
                break;
            }
        });
    },

    render: function () {
        var params = this.props.store.params;
        var hasFocus = this.props.store.hasFocus;
        var paramSearch = this.props.store.paramSearch;
        var parameters = this.props.parameters;
        var domain = this.props.domain;

        return (
            <div className="app">
                <Params
                    params={params}
                    parameters={parameters}
                    paramSearch={paramSearch}
                />
                <Help
                    hasFocus={hasFocus}
                    parameters={parameters}
                />
                <Request
                    domain={domain}
                    params={params}
                />
            </div>
        );
    }
});

// var Search = React.createClass();

// var Help = React.createClass();

var store = new Store();

var render = function () {
    React.renderComponent(
        <App
            store={store}
            parameters={ParametersConfig}
            domain='http://beta.content.guardianapis.com'
        />,
        document.getElementById('wacky-explorer')
    );
};

store.addEventListener(render);
render();
