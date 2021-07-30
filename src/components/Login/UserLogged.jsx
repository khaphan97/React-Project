import { LogoutOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { logoutAction } from "app/userSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function UserLogged(props) {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutAction());
	};


	const content = (
		<div>
			<Button danger type="text" icon={<LogoutOutlined />} onClick={handleLogout}>
				Đăng xuất
			</Button>
		</div>
	);



	return (
		<Popover placement="bottom" content={content}>
			<Link to="/user" className="user-login mt-1">
				<span>Phan Huy Kha</span>
			</Link>
		</Popover>
	);
}

export default UserLogged;
