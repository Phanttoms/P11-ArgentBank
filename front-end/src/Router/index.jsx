import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import Error from "../pages/Error";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Router() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="user" element={<User />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}
