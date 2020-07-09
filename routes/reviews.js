const apiRouter = require("express");

const reviewRouter = apiRouter.Router();
const {
  getAllReviews,
  getReviewsByProductID,
  getReviewsByUserID,
  updateReview,
} = require("../db");

reviewRouter.get("/", async (req, res, next) => {
  try {
    const reviews = await getAllReviews();
    res.send({ reviews });
  } catch ({ name, message }) {
    ({ name, message });
  }
});

reviewRouter.get("/productReviews/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const review = await getReviewsByProductID(productId);
    res.send({ review });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

reviewRouter.get("/userReviews/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const reviews = await getReviewsByUserID(userId);
    res.send({ reviews });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = reviewRouter;
