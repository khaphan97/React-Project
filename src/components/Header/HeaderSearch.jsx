import { Input, Popover, Space } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router";

function HeaderSearch(props) {
	const history = useHistory();

	const handleSearch = (searchStr) => {
		console.log(searchStr);
		if (searchStr.length > 0) {
			history.push(`/category/search/${searchStr}`);
		} else {
			history.push(`/category/1`);
		}
	};

	const content = () => {
		return (
			<Space direction="vertical">
				<Input.Search
					placeholder="Tìm kiếm sản phẩm"
					allowClear
					onSearch={handleSearch}
					style={{ width: 200 }}
				/>
			</Space>
		);
	};

	return (
		<Popover placement="bottom" content={content}>
			<div className="nav-link-custom">
				<AiOutlineSearch />
			</div>
		</Popover>
	);
}

export default HeaderSearch;
