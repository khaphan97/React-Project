import { useSelector } from "react-redux";

const useCartTotalPrice = () => {
	const listCart = useSelector((state) => state.cart.listCart);
	let totalPrice = 0;

	if (listCart) {
		totalPrice =
			listCart.length > 0
				? listCart.reduce((total, cartItem) => {
						return total + cartItem.product_price * cartItem.quantity;
				  }, 0)
				: 0;
	}
	return totalPrice;
};

export default useCartTotalPrice;
