var RequestBuilder = {

    build: function (domain, params, apiKey) {
        var request = domain;
        var paramsAsPairs = params.map(function (p) {
            return p.name + '=' + p.value;
        });

        paramsAsPairs.push('api-key=' + apiKey);

        if (paramsAsPairs.length > 0) {
            request += '?' + paramsAsPairs.join('&');
        }

        return request;
    }
};

module.exports = RequestBuilder;
