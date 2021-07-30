import { useSelector } from "react-redux";

const useCartTotalQty = () => {
	const listCart = useSelector((state) => state.cart.listCart);
	let totalQty = 0;
	if (listCart) {
		totalQty = listCart.reduce((total, carItem) => {
			return total + +carItem.quantity;
		}, 0);
	}

	return totalQty;
};

export default useCartTotalQty;
