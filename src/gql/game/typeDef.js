export const gameTypeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }

  type Query {
    games: [Game]
    game(id: ID!): Game
  }

  type Mutation {
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, data: UpdateGameInput!): Game
    deleteGame(id: ID!): [Game]
  }

  input AddGameInput {
    title: String!
    platform: [String!]!
  }

  input UpdateGameInput {
    title: String
    platform: [String!]
  }
`;
