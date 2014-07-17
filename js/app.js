/** @jsx React.DOM */

var React = require('react');
var Store = require('./stores/store');
var Dispatcher = require('./dispatcher/dispatcher');
var Actions = require('./actions/actions');
var Params = require('./components/params');
var Help = require('./components/help');

// components are:
//   app
//   |- search
//      |- param(s)
//   |- help
//   |- results

// NEXT STEP: allow addding and removing of params

var App = React.createClass({

    componentDidMount: function () {
        var that = this;

        Dispatcher.addActionListener(function (action) {
            switch (action.action) {
            case Actions.constants.ADD_PARAM:
                that.props.store.addParam(action.data);
                break;
            case Actions.constants.REMOVE_PARAM:
                that.props.store.removeParam(action.data);
                break;
            }
        });
    },

    render: function () {
        var params = this.props.store.params;
        var hasFocus = this.props.store.hasFocus;

        return (
            <div className="app">
                <Params params={params} />
                <Help hasFocus={hasFocus} />
            </div>
        );
    }
});

// var Search = React.createClass();

// var Help = React.createClass();

// var Results = React.createClass();

var store = new Store();

var render = function () {
    React.renderComponent(
        <App store={store}/>,
        document.getElementById('wacky-explorer')
    );
};

store.addEventListener(render);
render();
