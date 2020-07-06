const apiRouter = require("express");

const taxRouter = apiRouter.Router();
const { getAllTaxes } = require("../db");

taxRouter.get("/", async (req, res, next) => {
  try {
    const taxes = await getAllTaxes();
    res.send({ taxes });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = taxRouter;
