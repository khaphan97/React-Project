import React from "react";
import { Route, Switch } from "react-router";
import CheckoutPage from "./components/CheckoutPage";
import MainCategoryPage from "./components/MainCategoryPage";

function Cart(props) {
	return (
		<Switch>
			<Route path="/cart" exact>
				<MainCategoryPage />
			</Route>
            <Route path="/cart/checkout" exact>
				<CheckoutPage />
			</Route>
		</Switch>
	);
}

export default Cart;
