require("dotenv").config();
const { connect, connection } = require("mongoose");

// Opens a connection the the DB
connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
