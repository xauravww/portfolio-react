import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nodeMailer = require("nodemailer");

// require('dotenv').config();
const sendEmail = async (options) => {
  console.log("process.env.SMTP_HOST",process.env.SMTP_HOST)
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
console.log("options : ", options)
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.to,
    subject: options.subject,
    html: options.message,
  };

  console.log("Sending email to: ", mailOptions);

  await transporter.sendMail(mailOptions);
};

export  default sendEmail;