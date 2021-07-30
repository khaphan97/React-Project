import React from "react";
import { Button, Form, Input, message } from "antd";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OrdersApi from "api/ordersApi";
import { getListCart, getListCartAsync } from "app/cartSlice";
import { useHistory } from "react-router";
import useCartTotalPrice from "hook/useCartTotalPrice";

function CheckoutForm(props) {
	const [loading, setLoading] = React.useState(false);

	const totalPrice = useCartTotalPrice();


	const listCart = useSelector((state) => state.cart.listCart);

	const userInfo = useSelector((state) => state.user.userInfo) || null;

	const dispatch = useDispatch();

	const history = useHistory();

	const formItemLayout = {
		labelCol: { span: 5 },
		wrapperCol: { span: 24 },
	};

	const tailLayout = {
		wrapperCol: { offset: 5, span: 16 },
	};

	const onFinish = async (values) => {
		setLoading(true);
		const { fullname, address, phone, email, note } = values;
		const userId = userInfo ? userInfo.id : null;
		const Orders = new OrdersApi(fullname, address, phone, email, note, listCart, userId , totalPrice);
		try {
			const result = await Orders.addOrders();
			if (result.status) {
				dispatch(getListCartAsync());
				setLoading(false);
				message.success(result.message);
			}
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	};

	React.useEffect(() => {
		if (listCart.length === 0) {
			history.push("/");
		}
	}, [listCart, history]);

	return (
		<Col xs={12} lg={7}>
			<div className="border p-3">
				<h4 className="text-center mb-3">Thông tin thanh toán</h4>
				<Form {...formItemLayout} onFinish={onFinish}>
					<Form.Item
						name="fullname"
						label="Họ và tên"
						rules={[
							{
								required: true,
								message: "Vui lòng họ và tên của bạn",
							},
						]}
					>
						<Input placeholder="Nhập họ và tên người nhận" />
					</Form.Item>
					<Form.Item
						name="address"
						label="Địa chỉ"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập địa chỉ của bạn",
							},
						]}
					>
						<Input placeholder="Nhập địa chỉ giao hàng" />
					</Form.Item>
					<Form.Item
						name="phone"
						label="Số điện thoại"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập số điện thoại",
							},
							{
								pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
								message: "Vui lòng nhập số điện thoại hợp lệ",
							},
						]}
					>
						<Input placeholder="Nhập số điện thoại của bạn" />
					</Form.Item>
					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập email",
							},
							{
								pattern:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Vui lòng nhập email hợp lệ",
							},
						]}
					>
						<Input autoComplete="off" spellCheck="false" placeholder="Nhập địa chỉ email của bạn" />
					</Form.Item>
					<Form.Item name="note" label="Ghi chú đơn hàng">
						<Input.TextArea
							rows={6}
							placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
						/>
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button loading={loading} type="primary" htmlType="submit">
							Đặt hàng
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Col>
	);
}

export default CheckoutForm;
