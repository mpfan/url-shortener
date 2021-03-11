const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Url {
        id: String!
        longUrl: String!
        shortUrl: String!
        createdAt: String!
    }

    input UrlInput {
        longUrl: String!
    }

    type Query {
        urls: [Url!]
        urlByShortUrl(shortUrl: String): Url!
    }

    type Mutation {
        createUrl(url: UrlInput): Url
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);

module.exports = schema;
