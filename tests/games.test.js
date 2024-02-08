import { ApolloServer } from "@apollo/server";

import { resolvers } from "../src/gql/resolvers.js";
import { typeDefs } from "../src/gql/typeDefs.js";

const testServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const query = `
  query {
    games {
      title
      platform
      reviews {
        rating
        content
      }
    }
  }
`;

describe("Game queries", () => {
  it("returns a list of games", async () => {
    const response = await testServer.executeOperation({
      query,
    });

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data).toBeDefined();
  });
});
