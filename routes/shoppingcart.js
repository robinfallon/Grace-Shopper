const apiRouter = require("express");

const cartRouter = apiRouter.Router();

const {
    addToCart,
    destroyCart,
    getCartbyUserId
} = require("../db");

cartRouter.get("/", async (req, res, next) => {
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
        const {productId} = req.body
        if (req.user) {
        const userId = req.user.id
      const cartItems = await addToCart(userId, productId);
      res.send({ cartItems });
    } // else add to anonymous cart...
      
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
});

module.exports = cartRouter;