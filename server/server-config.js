require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "POST,GET,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

module.exports = app;
