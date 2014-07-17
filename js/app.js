/** @jsx React.DOM */

var React = require('react');
var Param = require('./components/param.js');
var Help = require('./components/help.js');

// components are:
//   app
//   |- search
//      |- param(s)
//   |- help
//   |- results

// NEXT STEP: filter help by param input

var App = React.createClass({

    getInitialState: function () {
        return {
            params: []
        };
    },

    render: function () {
        return (
            <div className="app">
                <Param name="section" />
                <Help />
            </div>
        );
    }
});

// var Search = React.createClass();

// var Help = React.createClass();

// var Results = React.createClass();

React.renderComponent(App(), document.getElementById('wacky-explorer'));
