import { Skeleton } from "antd";
import GlobalLoading from "components/GlobalLoading";
import ListProduct from "components/ListProduct";
import React from "react";
import { useSelector } from "react-redux";
import MainBanner from "./components/MainBanner";
import SubBanner from "./components/SubBanner";
import "./HomePage.scss";

function Home(props) {
	const listProduct = useSelector((state) => state.product.listProduct);

	const listProductMale = listProduct.filter((product) => +product.product_cate_id === 1);

	const listProductFemale = listProduct.filter((product) => +product.product_cate_id === 2);

	const listProductCouple = listProduct.filter((product) => +product.product_cate_id === 3);

	if (listProduct.length < 1) {
		return <Skeleton />;
	}

	return (
		<main>
			<section className="banner-main">
				<MainBanner />
			</section>

			<ListProduct sectionTitle="Đồng Hồ Nam" listProduct={listProductMale} />

			<SubBanner />

			<ListProduct sectionTitle="Đồng Hồ Nữ" listProduct={listProductFemale} />

			<ListProduct sectionTitle="Đồng Hồ Đôi" listProduct={listProductCouple} />
		</main>
	);
}

export default Home;
