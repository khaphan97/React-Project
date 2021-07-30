import ProductWidget from "features/Product/components/ProductWidget";
import React from "react";

function BrandWidget(props) {
	const BRANDS = [
		{ id: "1", name: "Casio", url: "/category/brand/1" },
		{ id: "2", name: "Citizen", url: "/category/brand/2" },
		{ id: "3", name: "Rolex", url: "/category/brand/3" },
		{ id: "4", name: "Orient", url: "/category/brand/4" },
		{ id: "5", name: "Galaxy", url: "/category/brand/5" },
		{ id: "5", name: "Tissot", url: "/category/brand/6" },
	];

	// const BRANDS = useSelector((state) => state.categories.brands);
	// const dispatch = useDispatch();

	// React.useEffect(() => {
	// 	const getListBrands = () => {
	// 		dispatch(getBrandAsync());
	// 	};
	// 	getListBrands();
	// }, []);

	return <ProductWidget widgetTitle="Thương hiệu" widgetType="filterWidget" widgetItems={BRANDS} />;
}

export default BrandWidget;
