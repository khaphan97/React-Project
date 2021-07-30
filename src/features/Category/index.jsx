import ProductItem from "components/ListProduct/ProductItem";
import CategoryHelper from "helpers/categoryHelper";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BrandWidget from "./components/BrandWidget";
import CategoriesWidget from "./components/CategoriesWidget";

function Category(props) {
	const { id } = useParams();

	const { strSearch } = useParams();

	const listProduct = useSelector((state) => state.product.listProduct);

	const listProductFilter = listProduct.filter((product) => +product.product_cate_id === +id);

	let listProductSearch = [];

	let listProductSearchElement = [];

	if (strSearch) {
		listProductSearch = listProduct.filter((product) =>
			product.product_name.toLowerCase().includes(strSearch.toLowerCase()),
		);

		listProductSearchElement = listProductSearch.map((product, index) => {
			return <ProductItem key={index} product={product} />;
		});
	}

	const listProductElement = listProductFilter.map((product, index) => {
		return <ProductItem key={index} product={product} />;
	});

	return (
		<div className="container">
			<Row className="my-4">
				<Col xs={12} lg={3} md={3}>
					<CategoriesWidget />
					<BrandWidget />
				</Col>
				{!strSearch ? (
					<Col xs={12} lg={9} md={9}>
						<h3>Danh sách sản phẩm {CategoryHelper.format(+id)} </h3>
						<div className="d-flex flex-wrap">{listProductElement}</div>
					</Col>
				) : (
					<Col xs={12} lg={9} md={9}>
						<h3>Kết quả tìm kiếm cho {strSearch} </h3>
						<div className="d-flex flex-wrap">{listProductSearchElement}</div>
					</Col>
				)}
			</Row>
		</div>
	);
}

export default Category;
