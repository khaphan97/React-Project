import axiosInstance from "./axiosConfig";

class UserApi {
	static async login(username, password) {
		try {
			let formData = new FormData();
			formData.append("username", username);
			formData.append("password", password);

			const res = await axiosInstance.post("user/login", formData);
			if (res.status === 200) {
				const { data } = res;
				return {
					message: data.message,
					status: data.status,
					userInfo: data.userInfo,
				};
			}
		} catch (error) {
			const { data } = error.response;
			return {
				message: data.message,
				status: data.status,
			};
		}
	}
}

export default UserApi;
