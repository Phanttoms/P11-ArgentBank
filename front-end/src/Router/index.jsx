import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login/Login";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}
