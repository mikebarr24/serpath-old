const mail = require("../routes/mail");
const express = require("express");
const cors = require("cors");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/mail", mail);
};
