const express = require("express");
const app = express();

app.use("/styles", express.static("styles"));
app.set("view engine", "ejs");

app.get("*", (req, res) => {
  console.log("GET /");
  res.render("pages/index", { path: req.path });
});

app.post("/", (req, res) => {});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
