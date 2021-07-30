import { addCart, addNewCartAsync } from "app/cartSlice";
import CategoryHelper from "helpers/categoryHelper";
import Currency from "helpers/currency";
import React from "react";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
ProductItem.propTypes = {};

function ProductItem(props) {
	const { product } = props;

	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	const userInfo = useSelector((state) => state.user.userInfo);

	const productUrl = `/product/${product.product_id}`;

	const dispatch = useDispatch();

	const onAddCart = (item) => {
		if (!isAuthenticated) {
			const cartItem = {
				product_id: item.product_id,
				product_img: item.product_img,
				product_name: item.product_name,
				product_price: item.product_price,
				quantity: 1,
			};
			dispatch(addCart(cartItem));
		} else {
			const data = {
				userId: userInfo.id,
				productId: item.product_id,
				quantity: 1,
			};
			dispatch(addNewCartAsync(data));
		}
	};

	return (
		<Fade big>
			<div className="product-item">
				<div className="out-of-stock-label">Hết hàng</div>
				<div className="product-thumb">
					<button
						className="product-add-to-cart"
						title="Thêm vào giỏ hàng"
						onClick={() => onAddCart(product)}
					>
						<IoBagAdd />
					</button>
					<Link to={productUrl}>
						<img src={product.product_img} alt="" />
					</Link>
				</div>
				<div className="product-text">
					<p className="product-cate text-muted">
						{CategoryHelper.format(+product.product_cate_id)}
					</p>
					<Link to={productUrl} className="product-name">
						{product.product_name}
					</Link>
					<span className="product-price">{Currency.format(product.product_price)}</span>
				</div>
			</div>
		</Fade>
	);
}

export default ProductItem;
