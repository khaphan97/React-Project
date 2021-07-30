import "App.scss";
import { getListCart } from "app/cartSlice";
import { getListProductAsync } from "app/productSlice";
import { setUserInfo } from "app/userSlice";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";
import Cart from "features/Cart";
import Category from "features/Category";
import Home from "features/Home";
import Product from "features/Product";
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		const checkIsAuthorized = () => {
			const userInfo = localStorage.getItem("userInfo");
			if (userInfo) {
				dispatch(setUserInfo(userInfo));
			}
		};
		checkIsAuthorized();
	}, []);

	React.useEffect(() => {
		const getListProducts = () => {
			dispatch(getListProductAsync());
		};
		getListProducts();
	}, [dispatch]);

	React.useEffect(() => {
		const handlerGetListCart = () => {
			dispatch(getListCart());
		};
		handlerGetListCart();
	}, []);

	return (
		<div className="app">
			<div id="wrapper">
				<HashRouter>
					<Header />
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/product/:id">
							<Product />
						</Route>
						<Route path="/category/search/:strSearch">
							<Category />
						</Route>
						<Route path="/category/:id">
							<Category />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
					</Switch>
					<ScrollToTop />
					<Footer />
				</HashRouter>
			</div>
		</div>
	);
}

export default App;
