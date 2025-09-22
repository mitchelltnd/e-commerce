import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
	return (
		<div className="w-screen max-w-screen h-screen bg-alice-blue ">
			<div className="w-full h-[10vh] max-w-screen">
				<NavBar />
			</div>
			<div className="w-full h-[90vh] max-w-screen bg-alice-blue flex flex-col justify-start items-center gap-[1rem] overflow-y-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
