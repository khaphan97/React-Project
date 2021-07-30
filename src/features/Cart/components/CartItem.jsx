import { Button, InputNumber, Skeleton } from "antd";
import {
	changeQuantity,
	deleteCartItem,
	deleteCartItemAsync,
	updateQuantityAsync,
} from "app/cartSlice";
import Currency from "helpers/currency";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

function CartItem(props) {
	const { cartItem } = props;

	const isUpdate = useSelector((state) => state.cart.isUpdate);

	const { id } = cartItem;

	const [quantity, setQuantity] = React.useState(cartItem.quantity);

	const dispatch = useDispatch();

	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	const subTotal = cartItem.product_price * cartItem.quantity;

	const onChangeQuantity = (quantity, cartItem) => {
		if (!isAuthenticated) {
			dispatch(changeQuantity({ cartItem, quantity }));
		} else {
			setQuantity(quantity);
		}
	};

	const handleUpdateQuantityAsync = () => {
		const data = {
			quantity,
			id,
		};
		dispatch(updateQuantityAsync(data));
	};

	const debounceChangeQuantity = debounce(handleUpdateQuantityAsync, 500);

	React.useEffect(() => {
		debounceChangeQuantity();
		return debounceChangeQuantity.cancel;
	}, [quantity]);

	const onDeleteCartItem = (cartItem) => {
		if (!isAuthenticated) {
			dispatch(deleteCartItem(cartItem));
		} else {
			dispatch(deleteCartItemAsync(cartItem));
		}
	};

	return (
		<tr>
			<td className="px-3">
				<Button danger onClick={() => onDeleteCartItem(cartItem)}>
					Xóa
				</Button>
			</td>
			<td className="product-thumb">
				<img src={cartItem.product_img} alt="" width="100px" />
			</td>

			<td className="product-name">
				<Link to={`/product/${cartItem.product_id}`} className="direct-link">
					{cartItem.product_name}
				</Link>
			</td>
			<td className="product-price">
				<strong>{Currency.format(cartItem.product_price)}</strong>
			</td>
			<td>
				<InputNumber
					min={1}
					max={50}
					defaultValue={cartItem.quantity}
					onChange={(qty) => onChangeQuantity(qty, cartItem)}
				/>
			</td>
			<td className="product-price">
				<strong>{Currency.format(subTotal)}</strong>
			</td>
		</tr>
	);
}

export default CartItem;
