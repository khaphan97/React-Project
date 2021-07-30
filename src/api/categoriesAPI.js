import axiosInstance from "api/axiosConfig";

export default class CategoriesAPI {
	static async getListCategories() {
		try {
			const response = await axiosInstance.get("categories");
			if (response.status === 200) {
				return {
					status: response.statusText,
					data: response.data,
				};
			}
		} catch (error) {
			console.log(error);
		}
	}

	static async getListBrands() {
		try {
			const response = await axiosInstance.get("brands");
			console.log(response);
			return response;
			// if (response.status === 304) {
			// 	return {
			// 		status: response.statusText,
			// 		data: response.data,
			// 	};
			// }
		} catch (error) {
			console.log(error);
		}
	}
}
