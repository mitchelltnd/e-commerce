const mongoose = require("mongoose");

const connect = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		if (connection) {
			console.log("MongoDB connected successfully");
		}
	} catch (error) {
		console.log("Error connecting to MongoDB:", error.message);
	}
};

module.exports = connect;
