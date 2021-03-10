const mongoose = require("mongoose");

const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnection;
