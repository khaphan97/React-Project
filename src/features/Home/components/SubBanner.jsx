import React from "react";
import { Button } from "react-bootstrap";

function SubBanner(props) {
	return (
		<section className="banner-sub">
			<div className="wrapper d-flex row no-gutters">
				<div className="banner-item col-lg-6 col-md-6 col-xs-12">
					<img
						src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/img1_2e549330-1e72-42fe-b909-7caec5ab9eaa.jpg"
						alt=""
					/>
					<div className="text-box">
						<div className="text-title">
							<span>Romance in the air</span>
						</div>
						<div className="text-subTitle">
							<span>WEAR YOUR STYLE WITH VERVE & ATTITUDE</span>
						</div>
						<Button variant="outline-warning">DETAILS</Button>
					</div>
				</div>
				<div className="banner-item col-lg-6 col-md-6 col-xs-12">
					<img
						src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/img2_0b6fbb1b-4374-4875-a7ff-93f41dce689e.jpg"
						alt=""
					/>
					<div className="text-box">
						<div className="text-title">
							<span>Analog & Digital</span>
						</div>
						<div className="text-subTitle">
							<span>SMART WATCHES
LATEST FASHION STATEMENT</span>
						</div>
						<Button variant="outline-warning">DETAILS</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SubBanner;
