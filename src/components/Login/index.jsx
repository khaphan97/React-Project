import { Button, Form, Input, Modal } from "antd";
import { userLoginAsync } from "app/userSlice";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const LoginModal = (props) => {
	const dispatch = useDispatch();

	const [visible, setVisible] = React.useState(false);

	const loading = useSelector((state) => state.user.isLoading);

	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	React.useEffect(() => {
		const checkAuth = () => {
			if (isAuthenticated) {
				setVisible(false);
			}
		};
        checkAuth();
	}, [isAuthenticated]);

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = async (values) => {
		dispatch(userLoginAsync(values));
	};

	const handleCancel = () => {
		setVisible(false);
	};

	return (
		<>
			<div className="nav-link-custom" onClick={showModal}>
				<AiOutlineUser />
			</div>
			<Modal
				title="Đăng nhập"
				visible={visible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button loading={loading} form="loginForm" key="submit" htmlType="submit" type="primary">
						Đăng nhập
					</Button>,
				]}
			>
				<Form
					name="loginForm"
					initialValues={{
						remember: true,
					}}
					onFinish={handleOk}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập tên tài khoản",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập mật khẩu",
							},
						]}
					>
						<Input.Password />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};
export default LoginModal;
