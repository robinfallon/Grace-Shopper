const apiRouter = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUsersByID } = require("../db");
const { JWT_SECRET } = process.env;

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  if (!auth) {
    // nothing to see here
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const parsedToken = jwt.verify(token, JWT_SECRET);
      console.log("parsed", parsedToken);

      const id = parsedToken && parsedToken.id;
      console.log(id);
      console.log(getUsersByID);
      if (id) {
        req.user = await getUsersByID(id);
        console.log(req.user);
        next();
      }
    } catch (error) {
      next(error);
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

const prodRouter = require("./product");
apiRouter.use("/products", prodRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const taxRouter = require("./tax");
apiRouter.use("/tax", taxRouter);

const reviewRouter = require("./reviews");
apiRouter.use("/reviews", reviewRouter);

const cartRouter = require("./shoppingcart");
apiRouter.use("/cart", cartRouter);

apiRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
});

module.exports = apiRouter;
