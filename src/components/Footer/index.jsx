import logo from "assets/images/logo.png";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
function Footer(props) {
	return (
		<footer className="bg-dark py-5">
			<Row className="no-gutters">
				<Col lg={4} md={12} xs={12}>
					<h4 className="footer-title text-center text-white">Điều hướng</h4>
				</Col>
				<Col lg={4} md={12} xs={12} className="text-center text-white">
					<img src={logo} alt="" className="w-50" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit suscipit odit itaque!
						Placeat rerum similique, distinctio itaque illum quia?
					</p>
					<InputGroup>
						<Form.Control id="inputEmail" type="email" placeholder="Email..." />
						<InputGroup.Prepend>
							<Button variant="success">Send</Button>
						</InputGroup.Prepend>
					</InputGroup>
				</Col>
				<Col lg={4} md={12} xs={12} className="px-5 text-rights text-white">
					<h4 className="footer-title text-white">Thông tin liên hệ</h4>
					<small>38 Đường 48 , Gò Vấp , Hồ Chí Minh</small> <br />
					<small>0365854213</small> <br />
					<small>phanhuykha123@gmail.com</small> <br />
					<small>Phan Huy Kha</small>
				</Col>
			</Row>
		</footer>
	);
}

export default Footer;
