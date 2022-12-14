const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("*", (req, res) => {
  console.log("GET " + req.path);
  res.render("pages/index", { path: req.path });
});

app.post("*", (req, res) => {
  console.log("POST " + req.path);
  res.send("POST " + req.path);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
