const express = require("express");
const dbConnection = require("./config/db");
const apiRuotes = require("./routes/shorten");
const indexRoutes = require("./routes/index");

const app = express();

dbConnection();

app.use(express.json({ extended: false }));

app.use("/api", apiRuotes);
app.use("/", indexRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
