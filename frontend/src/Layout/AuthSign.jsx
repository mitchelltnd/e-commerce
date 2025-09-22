import React from "react";
import { Outlet } from "react-router-dom";

const AuthSign = () => {
	return (
		<div className="w-screen max-w-screen h-screen bg-alice-blue flex flex-col justify-center items-center gap-[1rem]">
			<Outlet />
		</div>
	);
};

export default AuthSign;
