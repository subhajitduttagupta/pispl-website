require("dotenv").config();

const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  }),
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, phone, message } = req.body;

  let mailOptions;

  if (name && phone && message) {
    // Contact Us form
    mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: "pispl.contact@gmail.com",
      subject: "New Contact Us Message From PISPL website",
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    };
  } else if (phone) {
    // Get Quote form
    mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: "pispl.contact@gmail.com",
      subject: "New Quote Request From PISPL website",
      text: `Phone number: ${phone}`,
    };
  } else {
    return res.status(400).send("Invalid data");
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
