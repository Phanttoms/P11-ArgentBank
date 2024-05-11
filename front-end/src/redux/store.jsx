import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../redux/reducers/authReducers.jsx";
import profileReducers from "../redux/reducers/profileReducers.jsx";

const persistConfig = {
	key: "root",
	version: 1,
	storage: sessionStorage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		auth: authReducers,
		profile: profileReducers,
	})
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

const persistor = persistStore(store);

export { store, persistor };
