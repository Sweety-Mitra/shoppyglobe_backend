const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); 

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
