import React from "react";
import Banner from "../Components/Banner";
import Products from "../Components/Products";

const Dashboard = () => {
	return (
		<div className="w-full">
			<div className="w-full ">
				<Banner />
			</div>
			<div className="w-full min-h-[90vh] max-w-screen bg-alice-blue flex flex-col justify-start items-center gap-[1rem] overflow-y-auto ">
				<Products />
			</div>
		</div>
	);
};

export default Dashboard;
