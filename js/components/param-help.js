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
            <div className='type-hint hint'>
                <h4 className='hint-title'>Type: {type}</h4>
                <p>{typeHint}</p>
            </div>
        );
    },

    buildAllowedValues: function (allowedValues) {
        if (!allowedValues) {
            return null;
        }

        return (
            <div className='allowed-values-hint hint'>
                <h4 className='hint-title'>Allowed values</h4>
                <p>{allowedValues.join(', ')}</p>
            </div>
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
