var parameters = [

    {
        name: 'section',
        teaser: 'Filter by section',
        description: '<p>Sections are a form of meta-data used to group content. Typically, they correspond to a main section of the website - for example, \'sport\', or \'commentisfree\'.</p><p>Each article belongs to a single section.</p><p>A full list of sections is available at the sections endpoint.</p>'
    },

    {
        name: 'tag',
        teaser: 'Filter by tag',
        description: '<p>Tags are a form of meta-data used to group content. They are used for a wide variety of things - to identify journalists (e.g. \'profile/georgemonbiot\'), particular news-events (\'football/world-cup-2014\'), or regular grouping of related content (\'books/childrens-books\').</p><p>An article may have multiple tags.</p><p>A full list of tags is available at the tags endpoint.</p>'
    },

    {
        name: 'from-date',
        teaser: 'Return content on or after a given date',
        description: '<p>Dates should be of the form: YYYY-MM-DD, e.g. e.g. 2014-02-16.</p>',
        type: 'datetime'
    },

    {
        name: 'to-date',
        teaser: 'Return content before on on a given date',
        description: '<p>Dates should be of the form: YYYY-MM-DD, e.g. e.g. 2014-02-16.</p>',
        type: 'datetime'
    },

    {
        name: 'order-by',
        teaser: 'Set the ordering of results',
        description: '<p>Order results by one of: \'newest\', \'oldest\', or \'relevance\' (how closely an article matches against any search terms).</p>'
    },

    {
        name: 'show-tags',
        teaser: 'Return content with tags included',
        description: '<p>Tags are a form of meta-data used to categorise content.</p><p>You can filter by multiple tags; simply separate tags by a comma (\',\') to provide multiple values.</p><p>\'all\' can be used to show all tags.</p>'
    }
];

module.exports = parameters;
