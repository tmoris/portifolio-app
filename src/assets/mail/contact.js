require("dotenv").config();
const emailjs = require("emailjs-com");

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const userId = process.env.EMAILJS_USER_ID;

emailjs.init("userId");

const templateParams = {
  // ...
};

emailjs.send(serviceId, templateId, templateParams).then(
  function (response) {
    console.log("Email sent", response);
  },
  function (error) {
    console.error("Email error", error);
  }
);
