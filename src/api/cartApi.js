const { default: axiosInstance } = require("./axiosConfig");

class CartAPI {
	static async getListCartByUserId(id) {
		try {
			const res = await axiosInstance.get(`cart/index/?id=${id}`);
			if (res.status === 200) {
				const { data } = res;
				console.log(data);

				return {
					status: data.status,
					listCart: data.data,
				};
			}
		} catch (error) {
			console.log(error.response);
		}
	}

	static async addNewCart(data) {
		let formData = new FormData();
		formData.append("product_id", data.productId);
		formData.append("quantity", data.quantity);
		formData.append("user_id", data.userId);

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const res = await axiosInstance.post("cart", formData, config);

		if (res.status === 200) {
			const { data } = res;
			return {
				status: data.status,
				message: data.message,
				newCartItem: data.newCartItem,
				type: data.type,
			};
		}
	}

	static async deleteCartItem(data) {
		try {
			const cartId = data.id;
			const res = await axiosInstance.post(`cart/delete/?id=${cartId}`);

			if (res.status === 200) {
				const { data } = res;

				return {
					status: data.status,
					message: data.message,
					cartId,
				};
			}
		} catch (error) {
			console.log(error.response);
		}
	}

	static async updateQuantity(data) {
		try {
			let formData = new FormData();
			const id = data.id;
			const quantity = data.quantity;

			formData.append("id", data.id);
			formData.append("quantity", data.quantity);

			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};

			const res = await axiosInstance.post("cart/update", formData, config);
			if (res.status === 200) {
				const { data } = res;
				return {
					status: data.status,
					message: data.message,
					id,
					quantity,
				};
			}
		} catch (error) {
			console.log(error.response);
		}
	}
}

export default CartAPI;
