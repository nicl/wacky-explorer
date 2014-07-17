var withEventListener = function(that) {

    var callbacks = [];

    that.notifyAll = function() {
        callbacks.forEach(function(callback) {
            callback();
        });
    };

    that.addEventListener = function(callback) {
        callbacks.push(callback);
    };

    return that;
};

module.exports = withEventListener;
