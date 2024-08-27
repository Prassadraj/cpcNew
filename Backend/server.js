const express = require("express");
const cors = require("cors"); // Ensure CORS is enabled
const app = express();

// Function to simulate sending an email (replace with actual implementation)
async function sendEmail({ name, email, phone, message }) {
  // Simulate sending email and return a mock response
  return new Promise((resolve) => {
    setTimeout(() => resolve({ response: "Email sent successfully" }), 1000);
  });
}

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Check if all required fields are present in the JSON data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Call the async function to send the email
    const info = await sendEmail({ name, email, phone, message });

    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message || error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
