const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/database");
const authRoute = require("./routes/authRoute");
const membershipRoute = require("./routes/membershipRoute");
const contactRoute = require("./routes/contactRoute");

dotenv.config();
connectdb();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/membership", membershipRoute);
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log("Server running on port 4500"));