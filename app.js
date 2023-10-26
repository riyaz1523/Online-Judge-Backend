const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {DBConnection} = require("./Database/db")
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);


const PORT = process.env.PORT || 5000;

DBConnection();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});