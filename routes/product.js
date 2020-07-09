const apiRouter = require("express");

const prodRouter = apiRouter.Router();
const { getAllProducts } = require("../db");
const {
  getAllReviews,
  getReviewsByID,
  getReviewsByProductID,
} = require("../db");

prodRouter.get("/", async (req, res, next) => {
  try {
    const allProducts = await getAllProducts();
    res.send({
      allProducts,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

prodRouter.get("/review/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const review = await getReviewsByProductID(productId);
    res.send({ review });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = prodRouter;
