import db from "../api/db.js";

export const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, { id }) {
      return db.games.find((game) => game.id === id);
    },
    authors() {
      return db.authors;
    },
    author(_, { id }) {
      return db.authors.find((author) => author.id === id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, { id }) {
      return db.reviews.find((review) => review.id === id);
    },
  },
  Game: {
    reviews({id}) {
      return db.reviews.filter((review) => review.game_id === id);
    }
  },
  Author: {
    reviews({id}) {
      return db.reviews.filter((review) => review.author_id === id);
    }
  },
  Review: {
    game({game_id}) {
      return db.games.find((game) => game.id === game_id);
    },
    author({author_id}) {
      return db.authors.find((author) => author.id === author_id);
    }
  },
};
