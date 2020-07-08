const apiRouter = require("express");

const usersRouter = apiRouter.Router();
const { getAllUsers, getReviewsByUserID, createReview } = require("../db");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send({ users });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/reviews/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const reviews = await getReviewsByUserID(userId);
    res.send({ reviews });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = usersRouter;
