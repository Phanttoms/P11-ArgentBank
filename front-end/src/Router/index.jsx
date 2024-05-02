import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Router() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="user" element={<User />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
