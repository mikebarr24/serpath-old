const mail = require("../routes/mail");
const express = require("express");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/mail", mail);
};
