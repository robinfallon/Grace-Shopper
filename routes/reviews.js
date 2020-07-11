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

reviewRouter.patch("/:reviewId", async (req, res, next) => {
  try {
    const { productId, userId, review } = req.body;
    const updatedReview = await updateReview({
      id: req.params.productId,
      review,
    });

    res.send(updatedReview);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

reviewRouter.delete("/:reviewId", async (req, res, next) => {
  console.log("starting delete review");
  try {
    const deletedReview = await destroyReview(req.params.reviewId);
    res.send(deletedReview);
  } catch (error) {
    console.log(error);
  }
});

module.exports = reviewRouter;
