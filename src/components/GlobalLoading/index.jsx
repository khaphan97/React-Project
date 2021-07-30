import { Spin } from "antd";
import React from "react";
import { Spinner } from "react-bootstrap";
import "./style.scss";

function GlobalLoading(props) {
	return (
		<div id="global-loading" className="active">
			<Spin size="large"/>
		</div>
	);
}

export default GlobalLoading;
