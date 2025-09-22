const Usermodel = require("../model/user.model");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SignUp = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;
		//Check if input is empty
		if (!firstname || !lastname || !email || !password) {
			return res.status(400).json({
				message: "All fields are required",
				status: false,
			});
		}
		console.log(req.body);

		//Enctypt password
		const hashedPassword = bycrypt.hashSync(password, 10);

		//Create user
		const createdUser = await Usermodel.create({
			firstname,
			lastname,
			email,
			password: hashedPassword,
		});

		//Check if successful
		if (!createdUser) {
			return res.status(400).json({
				message: "An Error occured, User not created",
				status: false,
			});
		}
		console.log("User created successfully", createdUser);

		return res.status(200).json({
			message: "User created successfully",
			status: true,
		});
	} catch (error) {
		res.status(500).json({
			message: "Internal server error",
			error: error.message,
			status: false,
		});
	}
};

const SignIn = async (req, res) => {
	const [email, password] = req.body;

	//Validate req body isnt empty
	if (!email || !password) {
		res.status(400).json({
			message: "All inputs are required",
			status: false,
		});
	}

	//Check if User exists
	const existingUser = await Usermodel.findOne(email);
	if (!existingUser) {
		res.status(403).json({
			message: "User does not Exist",
			status: false,
		});
	}
};
module.exports = { SignUp, SignIn };
