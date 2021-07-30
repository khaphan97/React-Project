import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import CartAPI from "api/cartApi";

export const getListCartAsync = createAsyncThunk("cart", async (id) => {
	const res = await CartAPI.getListCartByUserId(id);
	return res;
});

export const addNewCartAsync = createAsyncThunk("cart/add", async (data) => {
	const res = await CartAPI.addNewCart(data);
	return res;
});

export const deleteCartItemAsync = createAsyncThunk("cart/delete", async (data) => {
	const res = await CartAPI.deleteCartItem(data);
	return res;
});

export const updateQuantityAsync = createAsyncThunk("cart/update", async (data) => {
	const res = await CartAPI.updateQuantity(data);
	return res;
});

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		listCart: [],
		isLoading: true,
		isUpdate: true,
	},
	reducers: {
		getListCart: (state, action) => {
			state.isLoading = false;
			if (sessionStorage.getItem("listCart")) {
				state.listCart = JSON.parse(sessionStorage.getItem("listCart"));
			}
		},
		addCart: (state, action) => {
			let cartItem = action.payload;

			const listCart = [...state.listCart];

			const isCartItemDuplicate = listCart.find((item) => item.product_id === cartItem.product_id);

			if (isCartItemDuplicate) {
				isCartItemDuplicate.quantity += 1;

				const cartItemIndex = state.listCart.indexOf(isCartItemDuplicate);

				state.listCart[cartItemIndex] = isCartItemDuplicate;

				message.success("Thêm vào giỏ hàng thành công");

				sessionStorage.setItem("listCart", JSON.stringify(state.listCart));
			} else {
				state.listCart.push(action.payload);
				message.success("Thêm vào giỏ hàng thành công");
				sessionStorage.setItem("listCart", JSON.stringify(state.listCart));
			}
		},
		changeQuantity: (state, action) => {
			let { cartItem, quantity } = action.payload;

			const listCart = [...state.listCart];

			const newCartItem = listCart.find((item) => item.product_id === cartItem.product_id);

			newCartItem.quantity = quantity;

			const cartItemIndex = state.listCart.indexOf(newCartItem);

			state.listCart[cartItemIndex] = newCartItem;
			sessionStorage.setItem("listCart", JSON.stringify(state.listCart));
		},
		deleteCartItem: (state, action) => {
			const cartItem = action.payload;

			const listCart = [...state.listCart];

			if (listCart.find((item) => item.product_id === cartItem.product_id)) {
				const newListCart = listCart.filter((item) => item.product_id !== cartItem.product_id);
				state.listCart = newListCart;
				sessionStorage.setItem("listCart", JSON.stringify(state.listCart));
				message.success("Xóa khỏi giỏ hàng thành công");
			}
		},
	},
	extraReducers: {
		[getListCartAsync.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getListCartAsync.fulfilled]: (state, action) => {
			state.isLoading = false;
			const result = action.payload;
			if (result.status) {
				state.listCart = result.listCart;
			}
		},
		[addNewCartAsync.pending]: (state, action) => {},
		[addNewCartAsync.fulfilled]: (state, action) => {
			const data = action.payload;
			if (data.type === "add") {
				state.listCart.push(data.newCartItem);
			} else {
				const currCartItem = [...state.listCart].find(
					(item) => item.product_id === data.newCartItem.product_id,
				);
				if (currCartItem) {
					currCartItem.quantity = data.newCartItem.quantity;
					const cartItemIndex = state.listCart.indexOf(currCartItem);

					state.listCart[cartItemIndex] = currCartItem;
				}
			}
		},
		[deleteCartItemAsync.pending]: (state, action) => {
			state.isLoading = true;
		},
		[deleteCartItemAsync.fulfilled]: (state, action) => {
			state.isLoading = false;
			const data = action.payload;
			console.log(data);
			if (data.status) {
				const newListCart = state.listCart.filter((item) => item.id !== data.cartId);
				state.listCart = newListCart;
				message.success(data.message);
			}
		},
		[updateQuantityAsync.pending]: (state, action) => {
			state.isUpdate = true;
		},
		[updateQuantityAsync.fulfilled]: (state, { payload }) => {
			state.isUpdate = false;
			if (payload.status) {
				const newListCart = state.listCart.map((item) => {
					if (+item.id === +payload.id) {
						item.quantity = payload.quantity;
					}
					return item;
				});
				state.listCart = newListCart;
			}
		},
	},
});

export const { addCart, changeQuantity, getListCart, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
