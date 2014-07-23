/** @jsx React.DOM */

var React = require('react');
var TypeHints = require('../config/parameter-type-hints');

var ParamHelp = React.createClass({

    propTypes: {
        param: React.PropTypes.object.isRequired
    },

    buildTypeHint: function (type, typeHint) {
        if (!typeHint) {
            return null;
        }

        return (
            <p className='type-hint hint'>Type: {type} - {typeHint}</p>
        );
    },

    buildAllowedValues: function (allowedValues) {
        if (!allowedValues) {
            return null;
        }

        return (
            <p className='allowed-values-hint hint'>{allowedValues.join(', ')}</p>
        );
    },

    render: function () {
        var param = this.props.param;
        param.typeHint = TypeHints[param.type];

        var typeHint = this.buildTypeHint(param.type, param.typeHint);
        var acceptedValues = this.buildAllowedValues(param.allowedValues);

        var helpContent = (
            <div>
                <h3>{param.teaser}</h3>
                <div dangerouslySetInnerHTML={{__html: param.description}} />
                {typeHint}
                {acceptedValues}
            </div>
        );

        return helpContent;
    }
});

module.exports = ParamHelp;
