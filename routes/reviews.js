const apiRouter = require("express");

const reviewRouter = apiRouter.Router();
const { getAllReviews } = require("../db");

reviewRouter.get("/", async (req, res, next) => {
  try {
    const reviews = await getAllReviews();
    res.send({ reviews });
  } catch ({ name, message }) {
    ({ name, message });
  }
});

module.exports = reviewRouter;
