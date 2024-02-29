const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("./src/middlewares/logger");
const colors = require("colors");
const errorHandler = require("./src/middlewares/errorHandler");
const app = express();

const { connectdb } = require("./src/config/db");
// load env vars
// dotenv.config({ path: './src/config/config.env' });
dotenv.config();

// all routes
const mainRoutes = require("./src/routes/routes");

// Connect to database
if (process.env.NODE_ENV !== "test") {
  connectdb();
}
// middleware
app.use(cookieParser()); // cookie parser when we needed the cookies value then we simply get and set
app.use(express.json()); // you ensure that your express application can handle json data sent in the request body automatically
app.use(express.urlencoded({ extended: true })); // it parses incoming request with url-encoded payloads and is based on a body parser.
app.use(cors()); // cros for different http method enable

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// logger assign 
app.use(logger);

//main route
mainRoutes(app);
// error Handler
app.use(errorHandler);

//root route
app.get("/", (req, res) => {
  res.send("Welcome to nodejs server!");
});

//not found route
app.get("*", (req, res) => {
  res.send("Not found route");
});
// Port
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    colors.magenta(
      `Server running in ${process.env.NODE_ENV} Mode on Port ${PORT}`
    )
  )
);

//handle and unhandle promise rejections
process.on("unhandledRejection", (err, message) => {
  console.log(colors.red(`Error ${err.message}`));
  // close server & process exit
  server.close(() => process.exit(1));
});
