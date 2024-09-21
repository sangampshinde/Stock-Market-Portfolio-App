const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js"); // Correct import
const stockRoutes = require("./routes/stockRoutes.js"); 

dotenv.config();
const app = express();

app.use(cors(
    {
        origin: "*", // Allow all origins
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
))

const PORT = process.env.PORT || 5000;




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
