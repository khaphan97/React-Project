import { Button, Empty, Skeleton } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";
import ListCart from "./ListCart";
import "../style.scss";

function MainCategoryPage(props) {
	const listCart = useSelector((state) => state.cart.listCart) || [];

	console.log("rendered");

	if (listCart.length === 0) {
		return (
			<div className="container cart-wrapper my-3 py-4">
				<Fade big>
					<Empty
						description={
							<>
								<p>Chưa có sản phẩm nào trong giỏ hàng</p>
								<Button>
									<Link to="/">Quay lại trang chủ</Link>
								</Button>
							</>
						}
					/>
				</Fade>
			</div>
		);
	}

	
	return (
		<div className="container cart-wrapper my-3 py-4">
			<Row>
				<Col xs={12} lg={8} md={12}>
					<ListCart listCart={listCart} />
					
				</Col>

				<Col xs={12} lg={4} md={12}>
					<CartTotal />
				</Col>
			</Row>
		</div>
	);
}

export default MainCategoryPage;
