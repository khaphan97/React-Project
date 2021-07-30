import { message } from "antd";
import UserApi from "api/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const userLoginAsync = createAsyncThunk("user/login", async ({ username, password }) => {
	const res = await UserApi.login(username, password);
	return res;
});

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLoading: false,
		userInfo: null,
		isAuthenticated: false,
	},
	reducers: {
		setUserInfo: (state, action) => {
			const data = JSON.parse(action.payload);
			state.userInfo = data;
			state.isAuthenticated = true;
		},
		logoutAction: (state, action) => {
			state.userInfo = null;
			state.isAuthenticated = false;
			localStorage.removeItem("userInfo");
		},
	},
	extraReducers: {
		[userLoginAsync.pending]: (state, action) => {
			state.isLoading = true;
		},
		[userLoginAsync.fulfilled]: (state, action) => {
			state.isLoading = false;
			const result = action.payload;
			if (result.status) {
				message.success(result.message);
				state.userInfo = result.userInfo;
				state.isAuthenticated = true;
				localStorage.setItem("userInfo", JSON.stringify(result.userInfo));
			} else {
				message.error(result.message);
			}
		},
	},
});

export const { setUserInfo, logoutAction } = userSlice.actions;

export default userSlice.reducer;
