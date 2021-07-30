import { Button, Form, InputNumber } from "antd";
import ProductApi from "api/productAPI";
import GlobalLoading from "components/GlobalLoading";
import CategoryHelper from "helpers/categoryHelper";
import Currency from "helpers/currency";
import React from "react";
import { Breadcrumb, Col, Dropdown, Row, Tab, Table, Tabs } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
ProductDetails.propTypes = {};

function ProductDetails(props) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
	};

	const [product, setProduct] = React.useState(null);

	const { id } = useParams();

	React.useEffect(() => {
		const getProductById = async () => {
			const res = await ProductApi.getProductById(id);
			if (res.status) {
				setProduct(res.data);
			}
		};
		getProductById();
	}, [id]);

	const onFinish = (values) => {
		console.log(values);
	};

	if (!product) {
		return <GlobalLoading />;
	}

	return (
		<Col lg={9} md={12} xs={12}>
			<Row>
				<Col lg={6} md={12} xs={12}>
					<div className="product-img">
						<img src={product.product_img} alt="" />
					</div>
				</Col>
				<Col lg={6} md={12} xs={12}>
					<div className="product-detail">
						<Breadcrumb className="bg-light">
							<Breadcrumb.Item>
								<Link to="/">Trang chủ</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								{CategoryHelper.format(+product.product_cate_id)}
							</Breadcrumb.Item>
						</Breadcrumb>
						<h3 className="product-title">{product.product_name}</h3>
						<Dropdown.Divider></Dropdown.Divider>
						<h4 className="product-price">{Currency.format(product.product_price)}</h4>
						<p className="product-desc">{product.product_detail}</p>
						<Form
							name="productCart"
							layout="inline"
							onFinish={onFinish}
							initialValues={{ quantity: 1 }}
						>
							<Form.Item
								className="mb-3"
								name="quantity"
								rules={[
									{
										type: "number",
										message: "Số lượng không thể bé hơn 1",
										min: 1,
									},
								]}
							>
								<InputNumber placeholder="Số lượng" />
							</Form.Item>
							<Form.Item>
								<Button type="primary" className="text-white btn-warning">
									Thêm vào giỏ hàng
								</Button>
							</Form.Item>
						</Form>
						<Dropdown.Divider></Dropdown.Divider>
						<p className="product-code">Mã: AU1080-20A</p>
						<p className="product-cate">
							Danh mục:{" "}
							<Link to={`/category/${product.product_cate_id}`} className="direct-link">
								{CategoryHelper.format(+product.product_cate_id)}
							</Link>
						</p>
					</div>
				</Col>
			</Row>
			<Dropdown.Divider></Dropdown.Divider>

			<div className="product-footer my-4">
				<Tabs defaultActiveKey="more-detail" id="uncontrolled-tab-example">
					<Tab eventKey="more-detail" title="Thông tin bổ sung">
						<div className="border-bottom border-left border-right">
							<Table striped>
								<tbody>
									<tr>
										<th>CHẤT LIỆU DÂY</th>
										<td>
											<a href="/#" className="direct-link">
												Dây vải
											</a>
										</td>
									</tr>
									<tr>
										<th>CHẤT LIỆU MẶT KÍNH</th>
										<td>
											<a href="/#" className="direct-link">
												Kính Sapphire
											</a>
										</td>
									</tr>
									<tr>
										<th>Thương Hiệu</th>
										<td>
											<a href="/#" className="direct-link">
												Citizen
											</a>
										</td>
									</tr>
									<tr>
										<th>XUẤT XỨ</th>
										<td>
											<a href="/#" className="direct-link">
												Nhật Bản
											</a>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</Tab>
					<Tab eventKey="rating" title="Đánh giá chi tiết"></Tab>
					<Tab eventKey="contact" title="Chính sách bảo hành">
						<div className="p-3 border-bottom border-left border-right">
							<p>Chính sách bảo hành của riêng mỗi hãng:</p>
							<p>CASIO: Bảo hành chính hãng máy 1 năm, pin 1,5 năm</p>
							<p>CITIZEN: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
							<p>SEIKO: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
							<p>ORIENT: Bảo hành chính hãng toàn cầu máy 1 năm, pin 1 năm</p>
							<p>OP: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
							<p>RHYTHM: Bảo hành chính hãng máy 1 năm, pin 1 năm</p>
							<p>OGIVAL: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
							<p>ELLE: Bảo hành chính hãng máy 2 năm, pin 2 năm</p>
							<p>TISSOT: Bảo hành chính hãng máy 2 năm, pin 1 năm</p>
						</div>
					</Tab>
				</Tabs>

				<div className="related-product my-4">
					<Dropdown.Divider></Dropdown.Divider>
					<h4 className="section-title">Sản phẩm tương tự</h4>
					<Slider {...settings}></Slider>
				</div>
			</div>
		</Col>
	);
}

export default ProductDetails;
