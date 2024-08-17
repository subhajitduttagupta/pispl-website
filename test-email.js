const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debugging output
  logger: true, // Enable logging output
});

// Define email options
const mailOptions = {
  from: process.env.EMAIL_ADDRESS,
  to: "test-recipient@example.com", // Replace with a valid recipient email
  subject: "Test Email from Nodemailer",
  text: "This is a test email sent using Nodemailer!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
