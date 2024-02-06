export const reviewTypeDefs = `#graphql
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review
  }

  type Mutation {
    addReview(review: AddReviewInput!): Review
    updateReview(id: ID!, data: UpdateReviewInput!): Review
    deleteReview(id: ID!): [Review]
  }

  input AddReviewInput {
    rating: Int!
    content: String!
    game_id: ID!
    author_id: ID!
  }

  input UpdateReviewInput {
    rating: Int
    content: String
    verified: Boolean
  }
`;
