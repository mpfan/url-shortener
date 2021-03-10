const mongoose = require("mongoose");
const config = require("config");

const dbUrl = config.get("dbUrl");

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    });

    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnection;
