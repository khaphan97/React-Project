import ProductApi from "api/productAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getListProductAsync = createAsyncThunk("product", async () => {
	const result = await ProductApi.getAllProducts();
	return result;
});

const productSlice = createSlice({
	name: "product",
	initialState: {
		listProduct: [],
		isLoading: true,
	},
	reducers: {},
	extraReducers: {
		[getListProductAsync.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getListProductAsync.fulfilled]: (state, action) => {
			state.isLoading = false;
			if (action.payload.status) {
				state.listProduct = action.payload.data;
			}
		},
	},
});

export default productSlice.reducer;
