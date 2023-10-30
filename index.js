require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes.js");
const db = require("./database/db.js");

db.connect().then(() => {
  app.emit("readyToRunApplication");
});

const app = express();

const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.on("readyToRunApplication", () => {
  app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
  });
});
