import React from "react";
import { Link } from "react-router-dom";

ProductWidgetItem.propTypes = {};

function ProductWidgetItem(props) {
	const { widget, type } = props;

	const renderProductWidget = (widget) => {
		return (
			<li className="product-list-item">
				<a href="/#">
					<img
						src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dich-vu-khac-laser-len-dong-ho-deo-tay-theo-yeu-cau-600x600-300x300.jpg"
						alt=""
					/>
					<div className="widget-text-box">
						<span>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</span>
						<p className="text-price">1,000,000đ</p>
					</div>
				</a>
			</li>
		);
	};

	const renderFilterWidget = (widget) => {
		return (
			<li className="product-list-item">
				<Link to={widget.url}>
					<div className="widget-text-box">
						<span>{widget.name}</span>
					</div>
				</Link>
			</li>
		);
	};

	return <>{type !== "filterWidget" ? renderProductWidget(widget) : renderFilterWidget(widget)} </>;
}

export default ProductWidgetItem;
