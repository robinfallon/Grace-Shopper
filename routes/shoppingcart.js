const apiRouter = require("express");

const cartRouter = apiRouter.Router();

const { updateCart, destroyCart, getCartbyUserId } = require("../db");

cartRouter.get("/", async (req, res, next) => {
<<<<<<< HEAD
  try {
    const { id } = req.user;
    const cartItems = await getCartbyUserId(id);
    res.send({ cartItems });
  } catch (err) {
    next(err);
  }
});

cartRouter.post("/", async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    const cartItems = await updateCart(userId, productId);
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
=======
    try {
        const {id} = req.user
      const cartItems = await getCartbyUserId(id);
      res.send({ cartItems });
    } catch (err) {
      next(err);
    }
});

cartRouter.post("/", async (req, res, next) => {
    try {
        const {userId, productId, quantity} = req.body
      const cartItems = await updateCart(userId, productId, quantity);
      res.send({ cartItems });
    } catch (err) {
      next(err);
    }
});

cartRouter.delete("/:cartId", async (req, res, next) => {
    try {
        const {cartId} = req.params
      const cartItems = await destroyCart(cartId);
      res.send({ cartItems });
    } catch (err) {
      next(err);
    }
>>>>>>> 059f46939404c7f838a628a19dd4ecd7ee6a0589
});



module.exports = cartRouter;
