const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter pe aao");
});

app.get("/login", (req, res) => {
  res.send("<h1>hal nikal tum login nhi kr paayega</h1>");
});

app.get("/about", (req, res) => {
  res.send("tumhare bare me kya hi kahna tum to famous ho ha...ha....");
});

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`);
});
