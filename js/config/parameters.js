var parameters = [

    {
        name: 'section',
        teaser: 'Filter by section',
        description: '<p>Sections are a form of meta-data used to group content. Typically, they correspond to a main section of the website - for example, \'sport\', or \'commentisfree\'.</p><p>Each article belongs to a single section.</p><p>A full list of sections is available at the sections endpoint.</p>',
        endpoints: ['item', 'content'],
        type: 'string'
    },

    {
        name: 'tag',
        teaser: 'Filter by tag',
        description: '<p>Tags are a form of meta-data used to group content. They are used for a wide variety of things - to identify journalists (e.g. \'profile/georgemonbiot\'), particular news-events (\'football/world-cup-2014\'), or regular grouping of related content (\'books/childrens-books\').</p><p>An article may have multiple tags.</p><p>A full list of tags is available at the tags endpoint.</p>',
        endpoints: ['item', 'content'],
        type: 'stringList'
    },

    {
        name: 'from-date',
        teaser: 'Return content on or after a given date',
        description: '<p>Note, the \'use-date\' parameter can be used to determine which date to filter against. By default, the published date is used.</p>',
        type: 'date',
        endpoints: ['item', 'content']
    },

    {
        name: 'to-date',
        teaser: 'Return content before or on a given date',
        description: '<p>Note, the \'use-date\' parameter can be used to determine which date to filter against. By default, the published date is used.</p>',
        type: 'date',
        endpoints: ['item', 'content']
    },

    {
        name: 'order-by',
        teaser: 'Set the ordering of results',
        description: '<p>By default results are ordered newest first. Note \'relevance\' is a measure of how closely the result matches any search terms.</p>',
        endpoints: ['item', 'content'],
        type: 'string',
        allowedValues: ['newest', 'oldest', 'relevance']
    },

    {
        name: 'show-tags',
        teaser: 'Return content with specified tag types included',
        description: '<p>Tags are a form of meta-data used to categorise content. They have a type. For example, \'keyword\' is the type for general topics, whereas a \'contributor\' type tag is very specific in purpose - it denotes an author of the piece.</p>',
        endpoints: ['item', 'content'],
        type: 'stringList'
    }
];

module.exports = parameters;
