import db from "../../db/index.js";

export const reviewResolver = {
  Query: {
    reviews() {
      return db.reviews;
    },
    review(_, { id }) {
      return db.reviews.find((review) => review.id === id);
    },
  },
  Mutation: {
    addReview(_, args) {
      let review = {
        id: Math.floor(Math.random() + 10000).toString(),
        ...args.review,
      };
      db.reviews.push(review);

      return review;
    },
    updateReview(_, args) {
      let reviewToUpdate;
      let updatedReviews = db.reviews.map((review) => {
        if (review.id === args.id) {
          reviewToUpdate = {
            ...review,
            ...args.data,
          };
        }
        return reviewToUpdate;
      });
      db.reviews = updatedReviews;

      return reviewToUpdate;
    },
    deleteReview(_, { id }) {
      db.reviews = db.reviews.filter((review) => review.id !== id);

      return db.reviews;
    },
  },
  Review: {
    game({ game_id }) {
      return db.games.find((game) => game.id === game_id);
    },
    author({ author_id }) {
      return db.authors.find((author) => author.id === author_id);
    },
  },
};
