import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import AuthSign from "./Layout/AuthSign";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

function App() {
	return (
		<Routes>
			<Route element={<DashboardLayout />}>
				<Route path="/" element={<Dashboard />} />
			</Route>
			<Route path="/auth" element={<AuthSign />}>
				<Route index element={<SignUp />} />
				<Route path="login" element={<LogIn />} />
			</Route>
		</Routes>
	);
}

export default App;
