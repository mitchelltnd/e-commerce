import React, { useState } from "react";
import "../Styles/LogIn.css";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";

const LogIn = () => {
	const navigate = useNavigate();

	const goBack = () => {
		if (window.history.length <= 2) {
			navigate("/");
		} else {
			navigate(-1);
		}
	};
	const [showPassword, setShowPassword] = useState(false);
	const validationSchema = yup.object({
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
	});

	const handleSubmit = (values) => {
		console.log("Form Values:", values);
	};
	return (
		<div className="w-screen h-screen bgpattern grid place-items-center text-montserrat">
			<div className="w-xl h-[70%] glasseffect shadow-lg p-5 rounded-lg text-white flex flex-col  gap-4 justify-center items-center">
				<h1 className="font-molle text-primary-blue text-[2rem] text-center">
					CloudMart
				</h1>
				<h2 className="font-montserrat text-primary-blue text-xl">Log In</h2>

				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ touched, errors, isValid, dirty }) => (
						<Form className="relative w-full flex flex-col gap-3">
							<div>
								<Field
									type="email"
									placeholder="Email"
									className="w-full h-10 bg-white px-3 border border-gray-300 rounded-md text-primary-blue
									 focus:outline-none focus:ring-2 focus:ring-primary-blue"
									name="email"
								/>
								{touched.email && errors.email && (
									<div className="text-red-500 text-sm">{errors.email}</div>
								)}
							</div>
							<div>
								<div className="w-full h-10 flex justify-between items-center text-primary-blue bg-white border border-gray-300 rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-blue">
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

							<button
								type="submit"
								disabled={!(isValid && dirty)}
								className={`w-full h-10 font-montserrat rounded-md  transition duration-300 ease-in-out  ${
									isValid && dirty
										? " bg-primary-blue text-white hover:bg-alice-blue hover:border-2 hover:border-primary-blue hover:text-primary-blue cursor-pointer"
										: "bg-gray-400 text-alice-blue cursor-not-allowed"
								}`}>
								Log In
							</button>

							<Link to="/Auth">
								<button className="w-full h-10 font-montserrat rounded-md bg-alice-blue transition duration-300 ease-in-out border-2 border-primary-blue text-primary-blue cursor-pointer hover:bg-primary-blue hover:text-alice-blue">
									Create an Account
								</button>
							</Link>
						</Form>
					)}
				</Formik>
			</div>
			<div
				className="absolute top-5 left-5 p-2 rounded-full flex items-center gap-2 cursor-pointer text-primary-blue hover:text-alice-blue hover:bg-primary-blue transition duration-300 ease-in-out"
				onClick={goBack}>
				<IoMdArrowBack size={30} />
			</div>
		</div>
	);
};

export default LogIn;
