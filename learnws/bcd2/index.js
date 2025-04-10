let express = require("express");

let app = express();
app.use(express.json());
let myToken = "12345";

let checkToken = (req, res, next) => {
  console.log("Welcome");
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Please fill the token",
    });
  }
  if (req.query.token != myToken) {
    return res.send({
      status: 0,
      msg: "Please fill the correct token",
    });
  }
  next();
};

app.use(checkToken); //middleware

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "hello home" });
});

app.get("/news", (req, res) => {
  res.send({ status: 1, msg: "hello news api" });
});

app.get("/news/:id", (req, res) => {
  let currId = req.params.id;
  res.send("news only" + currId);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: 1,
    msg: "hello post api",
    data: req.body,
    queryData: req.query,
  });
  //   res.send({
  //     status: 1,
  //     msg: "hello post api",
  //     data: req.body,
  //     queryData: req.query,
  //   });
});
app.listen("3000");
