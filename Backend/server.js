const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sivakumar.c@cpcdiagnostics.in", // Your Gmail address
    pass: "wxxpjxpfqjvf", // Your generated app password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, phone, message, email } = req.body;
  try {
    const info = await transporter.sendMail({
      from: email, // Sender address
      to: "sivakumar.c@cpcdiagnostics.in", // Your receiving email address
      subject: "From website", // Subject line
      text: message, // Plain text body
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    res.status(200).json({ message: "Email sent", messageId: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error); // Log error to console
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
