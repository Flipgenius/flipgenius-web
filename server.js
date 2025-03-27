const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

console.log("🔧 FlipGenius Server starting...");

app.get("/ebay-notifications", (req, res) => {
  console.log("📡 Received verification request");
  res.send("flipgenius-verify-token");
});

app.use((req, res) => {
  console.warn("❌ Route not found:", req.originalUrl);
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`✅ Server is listening at http://localhost:${PORT}`);
});

