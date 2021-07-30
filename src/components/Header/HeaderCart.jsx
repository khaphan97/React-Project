import { Badge, Image, Popover, Button, Empty } from "antd";
import Currency from "helpers/currency";
import useCartTotalPrice from "hook/useCartTotalPrice";
import useCartTotalQty from "hook/useCartTotalQty";
import React from "react";
import { BsBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderCartItem from "./HeaderCartItem";

function HeaderCart(props) {
	const listCart = useSelector((state) => state.cart.listCart) || [];

	const totalPrice = useCartTotalPrice();

	const totalQty = useCartTotalQty();

	const cartItemElement = listCart.map((cartItem) => {
		return <HeaderCartItem key={cartItem.product_id} cartItem={cartItem} />;
	});

	const cartContent = () => {
		if (listCart.length === 0) {
			return (
				<div className="cart-empty">
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description="Không có sản phẩm nào trong giỏ hàng"
					/>
				</div>
			);
		}
		return (
			<div>
				<div className="cart-container">
					<div className="list-cart">{cartItemElement}</div>
					<div className="cart-control">
						<p className="total-price">
							Tổng cộng: <span>{Currency.format(totalPrice)}</span>
						</p>
						<Button className="mb-2 bg-dark text-white">
							<Link to="/cart">Xem giỏ hàng</Link>
						</Button>
						<Button className="btn-checkout text-white">
							<Link to="/cart/checkout">Thanh toán</Link>
						</Button>
					</div>
				</div>
				{/* <div className="cart-empty">
					<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có sản phẩm nào trong giỏ hàng"/>
				</div> */}
			</div>
		);
	};

	return (
		<Popover title="Giỏ hàng" content={cartContent} placement="bottom">
			<Badge count={totalQty} offset={[-10, 0]} style={{ backgroundColor: "#e2ba48" }} size="large">
				<Link className="nav-link-custom " to="/cart">
					<BsBagFill />
				</Link>
			</Badge>
		</Popover>
	);
}

export default HeaderCart;
