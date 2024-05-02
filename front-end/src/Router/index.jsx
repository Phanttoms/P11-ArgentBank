import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="user" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}
