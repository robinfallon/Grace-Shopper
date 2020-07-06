const apiRouter = require("express");

const prodRouter = apiRouter.Router();
const { getAllProducts } = require("../db");

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
module.exports = prodRouter;
