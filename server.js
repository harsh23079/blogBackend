const express = require("express");
require("dotenv").config();
const database = require("./config/database");
const route = require("./Routes/routes");
const app = express();

app.use(express.json());
app.use("/api/v1", route);

database();
app.listen(process.env.PORT, () => {
  console.log(`Blog app listening on port ${process.env.PORT}`);
});
