const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // Correct import
const stockRoutes = require("./routes/stockRoutes.js"); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB


// Middleware
app.use(cors());
app.use(bodyParser.json());

// api endpoints
app.use("/api", stockRoutes);

// Start the server
app.listen(PORT,() => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
