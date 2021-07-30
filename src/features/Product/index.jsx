import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductDetails from "./components/ProductDetails";
import ProductWidget from "./components/ProductWidget";
import "./ProductPage.scss";

function Product(props) {
	return (
		<div className="container py-5">
			<Row>
				<Col lg={3} md={12} xs={12}>
					<ProductWidget widgetTitle="Sản phẩm" widgetType="productWidget" widgetItems={[1,2,3]}/>
					<ProductWidget widgetTitle="Tin tức" widgetType="productWidget"  widgetItems={[1,2,3,4]}/>
				</Col>
				<ProductDetails />
			</Row>
		</div>
	);
}

export default Product;
