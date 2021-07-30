import { Divider } from "antd";
import Currency from "helpers/currency";
import useCartTotalPrice from "hook/useCartTotalPrice";
import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutInfo(props) {
	const totalPrice = useCartTotalPrice();

	const listCart = useSelector((state) => state.cart.listCart) || [];

	const litsCartElements = listCart.map((item, index) => {
		console.log(item);
		return (
			<div className="cart-info-item mb-3" key={item.id}>
				<Link to={`/product/${item.product_id}`} className="d-inline-block direct-link">
					{item.product_name} × <span>{item.quantity}</span>
				</Link>
				<strong>{Currency.format(item.product_price * item.quantity)}</strong>
			</div>
		);
	});

	return (
		<Col xs={12} lg={5}>
			<div className="p-3 px-5 border">
				<h5>Đơn hàng của bạn</h5>
				<Divider />
				<p>
					Sản phẩm<strong>Tổng cộng</strong>
				</p>
				<Divider />
				<div>{litsCartElements}</div>
				<Divider />
				<p>
					Phí giao hàng <strong>Miễn phí</strong>
				</p>
				<Divider />
				<p>
					Tổng cộng <strong>{Currency.format(totalPrice)}</strong>
				</p>
			</div>
		</Col>
	);
}

export default CheckoutInfo;
