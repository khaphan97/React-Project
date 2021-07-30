import CategoriesAPI from "api/categoriesAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCateAsync = createAsyncThunk("category", async () => {
	const result = await CategoriesAPI.getListCategories();
	return result;
});

export const getBrandAsync = createAsyncThunk("category/brand", async () => {
	const result = await CategoriesAPI.getListBrands();
	return result;
});

const categoriesSlice = createSlice({
	name: "categories",
	initialState: {
		categories: [],
		brands: [],
		isLoading: false,
	},
	reducer: {},
	extraReducers: {
		[getCateAsync.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getCateAsync.fulfilled]: (state, action) => {
			state.categories = action.payload.data;
		},
		[getBrandAsync.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getBrandAsync.fulfilled]: (state, action) => {
			state.brands = action.payload.data;
		},
	},
});

export default categoriesSlice.reducer;
