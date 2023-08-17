require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// express app
const express = require("express");
const app = express();

// router
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/category");

// connect to database
const connectDB = require("./db/connect");

// middleware setting
app.use(express.static("public"));
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "https://plant-shop-frontend.web.app",
  })
);
app.use(xss());

// get method homepage test
app.get("/", (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});

// routes
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/products/categories", categoriesRouter);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
