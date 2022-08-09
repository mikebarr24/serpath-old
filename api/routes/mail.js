const router = require("express").Router();
const nodemailer = require("nodemailer");
const Joi = require("joi");
const validate = require("../middleware/validate");

require("dotenv").config();

const validateEmail = (email) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).email().required(),
    message: Joi.string().min(3).max(4000).required(),
  });
  return schema.validate(email);
};

router.get("/", (req, res) => {
  res.send("this is a test work!!!!");
});

router.post("/", [validate(validateEmail)], (req, res) => {
  const sendMail = async () => {
    const transporter = nodemailer.createTransport({
      service: "Hotmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "New Mail from Serpath",
      html: `<b>From</b>: ${req.body.email}<br /><b>Name:</b> ${req.body.name}<br /><p>${req.body.message}</p>`,
    });
    console.log("Message sent: %s", info.messageId);
  };
  sendMail().catch(console.error);

  res.send("Message Sent");
});

module.exports = router;
