const express = require("express");
const app = express();

app.use(express.json());

const { welcome } = require("./controllers/welcome.controllers");
//const { login } = require("./controllers/users.controller.js");
const auth = require("./auth/login");

app.get("/", welcome);

app.post("/login", auth, (req, res) => {
  res.status(200).send({ msg: "logged in!" });
});

app.use((err, _, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next();
  }
});

module.exports = app;
