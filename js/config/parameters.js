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
        name: 'use-date',
        teaser: 'Set the date field to use for ordering and date filtering',
        description: '<p>Defaults to \'published\'.</p>',
        type: 'string',
        endpoints: ['item', 'content'],
        allowedValues: ['published', 'newspaper-edition', 'last-modified']
    },

    {
        name: 'show-tags',
        teaser: 'Return content with specified tag types included',
        description: '<p>Tags are a form of meta-data used to categorise content. They have a type. For example, \'keyword\' is the type for general topics, whereas a \'contributor\' type tag is very specific in purpose - it denotes an author of the piece.</p>',
        endpoints: ['item', 'content'],
        type: 'stringList',
        supportsAll: true
    },

    {
        name: 'show-elements',
        teaser: 'Return content with elements included',
        description: '<p>Elements are associated media items, and include things such as videos and images.</p>',
        endpoints: ['item', 'content'],
        type: 'string',
        allowedValues: ['audio', 'image', 'video', 'all'],
        supportsAll: true
    },

    {
        name: 'show-references',
        teaser: 'Return content with references included',
        description: '<p>References are references to other resources, and include things like ISBN numbers, and musicbrainz references.</p>',
        endpoints: ['item', 'content'],
        type: 'stringList',
        allowedValues: ['author', 'bisac-prefix', 'esa-cricket-match',
                      'esa-football-match', 'esa-football-team',
                      'esa-football-tournament', 'isbn', 'musicbrainz',
                      'musicbrainzgenre', 'opta-cricket-match',
                      'opta-football-match', 'opta-football-team',
                      'opta-football-tournament', 'pa-football-competition',
                      'pa-football-match', 'pa-football-team', 'r1-film',
                      'reuters-index-ric', 'reuters-stock-ric',
                      'witness-assignment']
    },

    {
        name: 'show-related',
        teaser: 'Return content item with related content',
        description: '<p>Related content is content which is similar to the article.</p>',
        endpoints: ['item'],
        type: 'bool',
        supportedItemTypes: ['content']
    },

    {
        name: 'show-editors-picks',
        teaser: 'Return item with editors picks',
        description: '<p>Editors picks are a curated set of articles relating to a given front or section.</p>',
        endpoints: ['item'],
        type: 'bool',
        supportedItemTypes: ['front', 'section']
    },

    {
        name: 'show-most-viewed',
        teaser: 'Return item with most viewed',
        description: '<p>Most viewed is a list of the most viewed articles relating to a given front or section.</p>',
        endpoints: ['item'],
        type: 'bool',
        supportedItemTypes: ['front', 'section']
    },

    {
        name: 'show-story-package',
        teaser: 'Return content with story package',
        description: '<p>A story package is a collection of articles which have been (manually - by editorial) identified as belonging to the same story.</p><p>Note, not all articles belong to a story package.</p>',
        endpoints: ['item'],
        type: 'bool',
        supportedItemTypes: ['content']
    },

    {
        name: 'edition',
        teaser: 'Return a given edition for a section or front',
        description: '<p>Sections and fronts are customised for each Guardian edition. This means lists of curated content such as editors picks are different for each edition.</p><p>At the moment, the Guardian supports UK, US, and Australian editions. When no edition is specified, the default (UK) is returned.</p>',
        endpoints: ['item'],
        type: 'string',
        supportedItemTypes: ['section', 'front'],
        allowedValues: ['uk', 'us', 'au']
    },

    {
        name: 'show-fields',
        teaser: 'Return content with specified fields',
        description: '<p>Fields include body content for an article, and also article meta-data, such as byline (the authors), and the headline.</p>',
        endpoints: ['item', 'content'],
        type: 'stringList',
        supportedItemTypes: ['content', 'section', 'front', 'tag'],
        supportsAll: true
    },

    // missing:
    // pagination (page, page-size) - might want another solution for these)
    // ids filter

];

module.exports = parameters;
