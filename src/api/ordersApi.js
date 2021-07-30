const { default: axiosInstance } = require("./axiosConfig");

export default class OrdersApi {
	constructor(fullname, address, phone, email, note, listCart , userId, totalPrice) {
		this.fullname = fullname;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.note = note;
		this.listCart = JSON.stringify(listCart);
        this.userId = userId;
		this.totalPrice = totalPrice;
	}

	toFormData() {
		let formData = new FormData();
		formData.append("full_name", this.fullname);
		formData.append("address", this.address);
		formData.append("email", this.email);
		formData.append("phone", this.phone);
		formData.append("note", this.note);
		formData.append("list_cart_item", this.listCart);
		formData.append("user_id", this.userId);
		formData.append("total_price", this.totalPrice);
		return formData;
	}

	async addOrders() {
		const formData = this.toFormData();

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const res = await axiosInstance.post("orders", formData, config);
        console.log(res);
		if (res.status === 200) {
			const { data } = res;
			return {
				status: data.status,
				message: data.message,
			};
		}
	}
}
