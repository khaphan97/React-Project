import { getListCart, getListCartAsync } from "app/cartSlice";
import logo from "assets/images/logo.png";
import GlobalLoading from "components/GlobalLoading";
import LoginModal from "components/Login";
import UserLogged from "components/Login/UserLogged";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import HeaderCart from "./HeaderCart";
import HeaderSearch from "./HeaderSearch";
function Header() {
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	const userInfo = useSelector((state) => state.user.userInfo);

	const isLoading = useSelector((state) => state.cart.isLoading);

	const dispatch = useDispatch();

	React.useEffect(() => {
		const handlerGetListCart = () => {
			if (isAuthenticated) {
				const { id } = userInfo;
				dispatch(getListCartAsync(id));
			} else {
				dispatch(getListCart());
			}
		};
		handlerGetListCart();
	}, [isAuthenticated, userInfo, dispatch]);

	if (isLoading) {
		return <GlobalLoading />;
	}

	return (
		<header>
			<div className="container justify-content-between d-flex">
				<div className="header-logo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="header-nav">
					<ul className="nav justify-content-center align-items-center">
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								Giới thiệu
							</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link-custom" to="/category/1">
								<span> Đồng hồ nam </span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link-custom" to="/category/2">
								<span> Đồng hồ nữ </span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link-custom" to="/category/3">
								<span> Đồng hồ đôi </span>
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								<span>Tin tức</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link-custom" href="/#">
								Liên hệ
							</a>
						</li>
					</ul>
				</div>
				<div className="header-user">
					<div className="nav justify-content-center align-items-center">
						<HeaderSearch />
						<HeaderCart />
						{!isAuthenticated ? <LoginModal /> : <UserLogged />}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
