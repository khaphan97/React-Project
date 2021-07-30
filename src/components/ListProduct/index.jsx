import React from "react";
import Fade from "react-reveal/Fade";
import ProductItem from "./ProductItem";
import "./ProductList.scss";
ListProduct.propTypes = {};

function ListProduct(props) {
	const { sectionTitle, listProduct } = props;

	const listProductElement = listProduct.map((item, index) => {
		return <ProductItem key={index} product={item} />;
	});

	return (
		<section className="products-male py-5">
			<div className="container">
				<Fade right>
					<h2 className="section-title">{sectionTitle}</h2>
				</Fade>
				<div className="products-container">{listProductElement}</div>
			</div>
		</section>
	);
}

export default ListProduct;
