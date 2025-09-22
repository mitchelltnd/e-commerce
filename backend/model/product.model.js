const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		imageUrl: { type: String, required: true },
		otherImages: { type: [String] },
		brand: { type: String },
		category: { type: [String], required: true },
		stockQuantity: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const productmodel = mongoose.model("Product", productSchema);
module.exports = productmodel;
