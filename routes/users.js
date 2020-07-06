const apiRouter = require("express");

const usersRouter = apiRouter.Router();
const { getAllUsers } = require("../db");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send({ users });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = usersRouter;
