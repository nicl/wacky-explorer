var RequestBuilder = {

    build: function (domain, params, searchInput, apiKey) {
        var request = domain;
        var stripped = params.filter(function (p) {
            return p.value; // not empty
        });

        var paramsAsPairs = stripped.map(function (p) {
            return p.name + '=' + p.value;
        });

        if (searchInput) {
            paramsAsPairs.push('q=' + searchInput);
        }

        paramsAsPairs.push('api-key=' + apiKey);

        if (paramsAsPairs.length > 0) {
            request += '/search?' + paramsAsPairs.join('&');
        }

        return request;
    }
};

module.exports = RequestBuilder;
