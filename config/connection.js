require("dotenv").config();
const { connect, connection } = require("mongoose");

connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
