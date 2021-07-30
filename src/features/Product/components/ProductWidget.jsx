import React from "react";
import { Dropdown } from "react-bootstrap";
import ProductWidgetItem from "./ProductWidgetItem";

ProductWidget.propTypes = {};

function ProductWidget(props) {
	const { widgetTitle, widgetType, widgetItems } = props;

	const listWidget = widgetItems.map((widget, index) => {
		return <ProductWidgetItem key={index} widget={widget} type={widgetType} />;
	});

	return (
		<aside className="product-list widget">
			<span className="widget-title">{widgetTitle}</span>
			<Dropdown.Divider className="w-50 my-3"></Dropdown.Divider>
			<ul className="product-list-widget">{listWidget}</ul>
		</aside>
	);
}

export default ProductWidget;
