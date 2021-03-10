const express = require("express");
const dbConnection = require("./config/db");
const apiRuotes = require("./routes/api");
const indexRoutes = require("./routes/index");

const app = express();

dbConnection();

app.use(express.json({ extended: false }));

app.use("/api", apiRuotes);
app.use("/", indexRoutes);

app.listen(5000, () => console.log(`Server running on port 5000`));
