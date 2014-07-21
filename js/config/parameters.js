var section = {
    name: 'section',
    teaser: 'Filter by section',
    description: '<p>Sections are a form of meta-data used to group content. Typically, they correspond to a main section of the website - for example, \'sport\', or \'commentisfree\'.</p><p>Each article belongs to a single section.</p><p>A full list of sections is available at the sections endpoint.</p>'
};

var tag = {
    name: 'tag',
    teaser: 'Filter by tag',
    description: '<p>Tags are a form of meta-data used to group content. They are used for a wide variety of things - to identify journalists (e.g. \'profile/georgemonbiot\'), particular news-events (\'football/world-cup-2014\'), or regular grouping of related content (\'books/childrens-books\').</p><p>An article may have multiple tags.</p><p>A full list of tags is available at the tags endpoint.</p>'
};

var parameters = [section, tag];

module.exports = parameters;
