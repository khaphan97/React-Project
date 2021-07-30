import axiosInstance from "./axiosConfig";

export default class ProductApi {
	static async getAllProducts() {
		try {
			const response = await axiosInstance.get("product");
			if (response.status === 200) {
				return {
					status: true,
					data: response.data,
				};
			}
		} catch (error) {
			return {
				status: false,
				error,
			};
		}
	}

	static async getProductById(id){
		try {
			const res = await axiosInstance.get(`product/index/?id=${id}`);
			if (res.status === 200) {
				return {
					status: true,
					data: res.data,
				};
			}

		} catch (error) {
			return {
				status: false,
				error,
			};
		}
	}
}
