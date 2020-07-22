const apiRouter = require("express");

const cartRouter = apiRouter.Router();

const {
  updateCart,
  destroyCart,
  getCartbyUserId,
  updateCartForUser,
} = require("../db");

cartRouter.get("/", async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log("A WORD", req.user);
    const cartItems = await getCartbyUserId(id);
    res.send({ cartItems });
  } catch (err) {
    next(err);
  }
});

cartRouter.put("/update", async (req, res, next) => {
  try {
    const { quantity, cartId } = req.body;
    const cartItems = await updateCartForUser(quantity, cartId);
    res.send({ cartItems });
  } catch (err) {
    next(err);
  }
});

cartRouter.post("/", async (req, res, next) => {
  try {
    console.log("trying");
    const { userId, productId, quantity, itemname, price, image } = req.body;
    console.log("trying", userId, productId, quantity, itemname, price, image);
    console.log("req", req.body);

    const cartItems = await updateCart(
      userId,
      productId,
      quantity,
      itemname,
      price,
      image
    );
    res.send({ cartItems });
  } catch (err) {
    next(err);
  }
});

cartRouter.delete("/:cartId", async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const cartItems = await destroyCart(cartId);
    res.send({ cartItems });
  } catch (err) {
    next(err);
  }
});

module.exports = cartRouter;
