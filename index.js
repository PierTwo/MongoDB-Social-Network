const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

// Middleware for the routes for the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Open a connection to the DB using the port provided by the PORT variable
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
