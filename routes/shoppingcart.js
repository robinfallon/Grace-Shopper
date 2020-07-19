const apiRouter = require("express");

const cartRouter = apiRouter.Router();

const {
    updateCart,
    destroyCart,
    getCartbyUserId
} = require("../db");

cartRouter.get("/", async (req, res, next) => {
    try {
        const {id} = req.user
      const cartItems = await getCartbyUserId(id);
      res.send({ cartItems });
    } catch ({ name, message }) {
      ({ name, message });
    }
});

cartRouter.post("/", async (req, res, next) => {
    try {
        const {userId, productId} = req.body
      const cartItems = await updateCart(userId, productId);
      res.send({ cartItems });
    } catch ({ name, message }) {
      ({ name, message });
    }
});

cartRouter.delete("/:cartId", async (req, res, next) => {
    try {
        const {cartId} = req.params
      const cartItems = await destroyCart(cartId);
      res.send({ cartItems });
    } catch ({ name, message }) {
      ({ name, message });
    }
});

module.exports = cartRouter;