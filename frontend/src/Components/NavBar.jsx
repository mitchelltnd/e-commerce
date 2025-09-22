import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="w-full h-[10vh] bg-primary-blue flex flex-row justify-between items-center gap-[1rem] px-5">
			<div className="w-[20vw] h-[6vh] bg-alice-blue flex flex-row justify-start items-center gap-[1rem] rounded-sm shadow-md p-2">
				<CiSearch />
				<input
					type="text"
					name="Search"
					placeholder="Search devices, gadgets, brands ....."
					className="w-[80%] h-full border-none outline-none bg-alice-blue text-sm"
				/>
			</div>
			<h1 className="font-molle text-maya-blue text-3xl">CloudMart</h1>

			<div className="w-auto flex flex-row justify-center items-center gap-[0.6rem]">
				<Link to="/Auth">
					<button className="font-montserrat text-[0.8rem] text-alice-blue flex flex-row justify-center items-center gap-[0.5rem] w-auto h-[6vh] rounded-sm p-2 hover:bg-alice-blue hover:text-primary-blue transition-all duration-300 ease-in-out">
						<FiUser size={19} /> Sign Up/Sign In
					</button>
				</Link>

				<div className="h-8 w-px bg-gray-400 opacity-70"></div>
				<button className="font-montserrat text-[0.8rem] text-alice-blue flex flex-row justify-center items-center gap-[0.5rem] w-auto h-[6vh] rounded-sm p-2 hover:bg-alice-blue hover:text-primary-blue transition-all duration-300 ease-in-out">
					<RiShoppingCartLine size={19} />
					Cart
				</button>
			</div>
		</div>
	);
};

export default NavBar;
