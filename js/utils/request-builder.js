var RequestBuilder = {

    build: function (domain, params, searchInput, apiKey) {
        var request = domain;
        var stripped = params.filter(function (p) {
            return p.value; // not empty
        });

        if (searchInput) {
            stripped.push({name: 'q', value: searchInput});
        }

        stripped.push({name: 'api-key', value: apiKey});

        var paramsAsPairs = stripped.map(function (p) {
            return p.name + '=' + encodeURIComponent(p.value);
        });

        if (paramsAsPairs.length > 0) {
            request += '/search?' + paramsAsPairs.join('&');
        }

        return request;
    }
};

module.exports = RequestBuilder;
