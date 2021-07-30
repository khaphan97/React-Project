import React from "react";
import { Table } from "react-bootstrap";
import CartItem from "./CartItem";

function ListCart(props) {
	const { listCart } = props;
	const cartItemElements = listCart.map((item, index) => {
		return <CartItem key={item.product_id} cartItem={item} index={++index} />;
	});

	return (
		<form action="">
			<Table>
				<thead>
					<tr className="text-center">
						<th colSpan="3">Sản Phẩm</th>
						<th>Giá</th>
						<th>Số lượng</th>
						<th>Tổng cộng</th>
					</tr>
				</thead>
				<tbody>{cartItemElements}</tbody>
			</Table>
		</form>
	);
}

export default ListCart;
