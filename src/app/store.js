import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "features/Category/categorySlice";
import productReducer from "app/productSlice";
import userReducer from "app/userSlice";
import cartReducer from "app/cartSlice";

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		product: productReducer,
		user: userReducer,
		cart: cartReducer,
	},
});
