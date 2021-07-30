import React from "react";
import { Col, Row } from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import CheckoutInfo from "./CheckoutInfo";

function CheckoutPage(props) {

	return (
		<div className="container py-5">
			<Row>
				<CheckoutForm/>
				<CheckoutInfo/>
			</Row>
		</div>
	);
}

export default CheckoutPage;
