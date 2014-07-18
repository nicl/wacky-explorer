var $ = require('jquery');

var AjaxHelper = {

    loadJson: function(url, success, error) {
        $.ajax({
            url: url,
            dataType: 'json',
            success: success,
            error: error
        });
    }
};

module.exports = AjaxHelper;
