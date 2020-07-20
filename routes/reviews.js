const apiRouter = require("express");

const reviewRouter = apiRouter.Router();
const {
  getAllReviews,
  getReviewsByProductID,
  getReviewsByUserID,
  updateReview,
  destroyReview,
} = require("../db");

reviewRouter.get("/", async (req, res, next) => {
  try {
    const reviews = await getAllReviews();
    res.send({ reviews });
  } catch (err) {
    next(err);
  }
});

reviewRouter.get("/productReviews/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const review = await getReviewsByProductID(productId);
    res.send({ review });
  } catch (err) {
    next(err);
  }
});

reviewRouter.get("/userReviews/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const reviews = await getReviewsByUserID(userId);
    res.send({ reviews });
  } catch (err) {
    next(err);
  }
});

reviewRouter.patch("/:reviewId", async (req, res, next) => {
  try {
    const { productId, userId, review } = req.body;
    const updatedReview = await updateReview({
      id: req.params.productId,
      review,
    });

    res.send(updatedReview);
  } catch (err) {
    next(err);
  }
});

reviewRouter.delete("/:reviewId", async (req, res, next) => {
  console.log("starting delete review");
  try {
    const deletedReview = await destroyReview(req.params.reviewId);
    res.send(deletedReview);
  } catch (err) {
    next(err);
  }
});

module.exports = reviewRouter;
