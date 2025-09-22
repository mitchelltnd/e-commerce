import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../Styles/SignUp.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import { message } from "antd";

const SignUp = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const navigate = useNavigate();
	const goBack = () => {
		if (window.history.length <= 2) {
			navigate("/");
		} else {
			navigate(-1);
		}
	};

	const validationSchema = yup.object({
		firstname: yup.string().required("First name is required"),
		lastname: yup.string().required("Last name is required"),
		email: yup
			.string()
			.required("Email is required")
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				"Invalid email address"
			),
		password: yup
			.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters"),
		confirmPassword: yup
			.string()
			.required("Confirm Password is required")
			.oneOf([yup.ref("password"), null], "Passwords must match"),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleSubmit = (values) => {
		const valuesToSend = {
			firstname: values.firstname,
			lastname: values.lastname,
			email: values.email,
			password: "",
		};
		if (values.password === values.confirmPassword) {
			valuesToSend.password = values.password;
		}
		axios
			.post("http://localhost:6001/user/signup", valuesToSend)
			.then((response) => {
				console.log("User Info:", response.data);
				messageApi.success({
					content: "Account created successfully!",
					duration: 3,
					onClose: () => navigate("/"),
				});
			})
			.catch((error) => {
				console.error("Error during login:", error);
				messageApi.error({
					content: "Signup failed. Please try again.",
					duration: 4,
				});
			});
	};

	return (
		<div className="w-screen h-screen bg-alice-blue grid place-items-center text-montserrat magicpattern">
			{contextHolder}
			<div className="w-xl h-[80%] ">
				<div className="w-full h-[90%] bg-white rounded-md shadow-lg p-5 flex flex-col justify-center items-center gap-4">
					<h1 className="font-molle text-primary-blue text-[2rem] text-center">
						CloudMart
					</h1>
					<h2 className="font-montserrat text-primary-blue text-xl">Sign Up</h2>

					<Formik
						initialValues={{
							firstname: "",
							lastname: "",
							email: "",
							password: "",
							confirmPassword: "",
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{({ touched, errors, isValid, dirty }) => (
							<Form className=" w-full flex flex-col gap-3">
								<div>
									<Field
										type="text"
										placeholder="First Name"
										className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
										name="firstname"
									/>
									{touched.firstname && errors.firstname && (
										<div className="text-red-500 text-sm">
											{errors.firstname}
										</div>
									)}
								</div>

								<div>
									<Field
										type="text"
										placeholder="Last Name"
										className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
										name="lastname"
									/>
									{touched.lastname && errors.lastname && (
										<div className="text-red-500 text-sm">
											{errors.lastname}
										</div>
									)}
								</div>

								<div>
									<Field
										type="email"
										placeholder="Email Address"
										className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
										name="email"
										autoComplete="email"
									/>
									{touched.email && errors.email && (
										<div className="text-red-500 text-sm">{errors.email}</div>
									)}
								</div>

								<div>
									<div className="w-full h-10 flex justify-between items-center border border-gray-300 rounded-md focus-within:outline-none focus-within:ring-2 focus:ring-primary-blue">
										<Field
											type={showPassword ? "text" : "password"}
											name="password"
											placeholder="Password"
											className="w-[90%] h-10 px-3 focus:outline-none"
										/>
										<span
											className="h-full w-[10%]  grid place-items-center cursor-pointer"
											onClick={() => setShowPassword(!showPassword)}>
											{showPassword ? (
												<FaEye size={18} />
											) : (
												<FaEyeSlash size={20} />
											)}
										</span>
									</div>
									<ErrorMessage
										name="password"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
								<div>
									<div className="w-full h-10 flex justify-between items-center border border-gray-300 rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-blue">
										<Field
											type={showConfirmPassword ? "text" : "password"}
											placeholder="Confirm Password"
											className="w-[90%] h-10 px-3 focus:outline-none"
											name="confirmPassword"
										/>
										<span
											className="h-full w-[10%]  grid place-items-center cursor-pointer"
											onClick={() =>
												setShowConfirmPassword(!showConfirmPassword)
											}>
											{showConfirmPassword ? (
												<FaEye size={18} />
											) : (
												<FaEyeSlash size={20} />
											)}
										</span>
									</div>
									<ErrorMessage
										name="confirmPassword"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
								<button
									type="submit"
									disabled={!(isValid && dirty)}
									className={`w-full h-10 font-montserrat rounded-md  transition duration-300 ease-in-out  ${
										isValid && dirty
											? " bg-primary-blue text-white hover:bg-alice-blue hover:border-2 hover:border-primary-blue hover:text-primary-blue cursor-pointer"
											: "bg-gray-400 text-alice-blue cursor-not-allowed"
									}`}>
									Create Account
								</button>

								<Link to="login">
									<button className="w-full h-10 font-montserrat rounded-md bg-alice-blue transition duration-300 ease-in-out border-2 border-primary-blue text-primary-blue cursor-pointer hover:bg-primary-blue hover:text-alice-blue">
										Log In
									</button>
								</Link>
							</Form>
						)}
					</Formik>
					<div
						className="absolute top-5 left-5 p-2 rounded-full flex items-center gap-2 cursor-pointer text-primary-blue hover:text-alice-blue hover:bg-primary-blue transition duration-300 ease-in-out"
						onClick={goBack}>
						<IoMdArrowBack size={30} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
