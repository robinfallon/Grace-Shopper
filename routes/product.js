const apiRouter = require("express");

const prodRouter = apiRouter.Router();

const {
  getAllProducts,
  destroyProduct,
  updateProduct,
  createProduct,
} = require("../db");

prodRouter.get("/", async (req, res, next) => {
  try {
    const allProducts = await getAllProducts();
    res.send({
      allProducts,
    });
  } catch (err) {
    next(err);
  }
});

prodRouter.delete("/:id", async (req, res, next) => {
  try {
      const {id} = req.params
    const products = await destroyProduct(id);
    res.send({ products });
  } catch (err) {
    next(err);
  }
});

prodRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id, itemname, description, price, category, image} = req.body;
    const updatedProduct = await updateProduct({
      id: req.params.id,
      itemname, description, price, category, image
    });

    res.send(updatedProduct);
  } catch (err) {
    next(err);
  }
});

prodRouter.post("/create", async (req, res, next) => {
  try {
      const {itemname, description, price, category, image} = req.body
    const newItem = await createProduct({itemname, description, price, category, image});
    res.send({ newItem });
  } catch (err) {
    next(err);
  }
});

module.exports = prodRouter;
