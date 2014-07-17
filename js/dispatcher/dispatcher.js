var callbacks = [];

var Dispatcher = {

    addActionListener: function(callback) {
        callbacks.push(callback);
    },

    handleAction: function(action) {
        callbacks.forEach(function(callback) {
            callback(action);
        });
    }
};

module.exports = Dispatcher;
