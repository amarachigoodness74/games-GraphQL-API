export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }

  type Query {
    authors: [Author]
    author(id: ID!): Author
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
  }

  type Mutation {
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, data: UpdateGameInput!): Game
    deleteGame(id: ID!): [Game]

    addAuthor(author: AddAuthorInput!): Author
    updateAuthor(id: ID!, data: UpdateAuthorInput!): Author
    deleteAuthor(id: ID!): [Author]
  }

  input AddGameInput {
    title: String!
    platform: [String!]!
  }

  input UpdateGameInput {
    title: String
    platform: [String!]
  }

  input AddAuthorInput {
    name: String!
    verified: Boolean!
  }

  input UpdateAuthorInput {
    name: String
    verified: Boolean
  }
`;
