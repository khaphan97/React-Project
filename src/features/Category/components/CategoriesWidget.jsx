import ProductWidget from "features/Product/components/ProductWidget";
import React from "react";

function CategoriesWidget(props) {
	const CATEGORIES = [
		{ id: "1", name: "Đồng hồ nam", url: "/category/1" },
		{ id: "2", name: "Đồng hồ nữ", url: "/category/2" },
		{ id: "3", name: "Đồng hồ đôi", url: "/category/3" },
	];

	// const CATEGORIES = useSelector((state) => state.categories.categories);

	// const dispatch = useDispatch();

	// React.useEffect(() => {
	// 	const getListCate = () => {
	// 		dispatch(getCateAsync());
	// 		console.log(CATEGORIES);
	// 	};
	// 	getListCate();
	// }, []);

	return (
		<ProductWidget
			widgetTitle="Danh Mục Sản Phẩm"
			widgetType="filterWidget"
			widgetItems={CATEGORIES}
		/>
	);
}

export default CategoriesWidget;
