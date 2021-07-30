import { Button, Divider, Skeleton } from "antd";
import Currency from "helpers/currency";
import useCartTotalPrice from "hook/useCartTotalPrice";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartTotal(props) {
	const totalPrice = useCartTotalPrice();

	return (
		<div className="cart-total">
			<div className="cart-total-box">
				<p>Tổng số lượng</p>
				<Divider style={{ margin: "10px" }} />
				<p>
					Tổng cộng : <strong>{Currency.format(totalPrice)}</strong>
				</p>
				<Divider style={{ margin: "10px" }} />
				<p>
					Phí giao hàng : <strong>Miễn phí giao hàng</strong>
				</p>
				<Divider style={{ margin: "10px" }} />
				<p>
					Tổng cộng : <strong>{Currency.format(totalPrice)}</strong>
				</p>
				<Divider style={{ margin: "10px" }} />
				<Link to="/cart/checkout" className="btn-checkout w-100 d-block text-center py-2">

					Tiến hành thanh toán
				</Link>
			</div>
		</div>
	);
}

export default CartTotal;
