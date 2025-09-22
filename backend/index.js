const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connect = require("./Db.config/Db.connect");
const userrouter = require("./routes/user.route");
require("dotenv").config();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use("/user", userrouter);

app.listen(process.env.PORT || 5000, () => {
	console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

connect();
