/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";

const quick__link = [
	{
		path: "/home",
		display: "Home",
	},
	{
		path: "/about",
		display: "About",
	},
	{
		path: "/tours",
		display: "Tours",
	},
];

const quick__link2 = [
	{
		path: "/gallery",
		display: "Gallery",
	},
	{
		path: "/login",
		display: "Login",
	},
	{
		path: "/register",
		display: "Register",
	},
];

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="3">
						<div className="logo">
							<img src="" alt="" />Journea
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Impedit, necessitatibus! Assumenda ipsa saepe voluptates
								explicabo.
							</p>
							<div className="social__links d-flex align-items-center gap-4">
								<span>
									<Link to="">
										<i className="ri-youtube-line"></i>
									</Link>
								</span>
								<span>
									<Link to="">
										<i className="ri-github-fill"></i>
									</Link>
								</span>
								<span>
									<Link to="">
										<i className="ri-facebook-circle-line"></i>
									</Link>
								</span>
								<span>
									<Link to="">
										<i className="ri-instagram-line"></i>
									</Link>
								</span>
							</div>
						</div>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">Discoveries</h5>
						<ListGroup className="footer__quick-links">
							{quick__link.map((item, index) => (
								<ListGroupItem key={index} className="ps-0 border-0">
									<Link to={item.path}>{item.display}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">Quick Links</h5>
						<ListGroup className="footer__quick-links">
							{quick__link2.map((item, index) => (
								<ListGroupItem key={index} className="ps-0 border-0">
									<Link to={item.path}>{item.display}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col lg="3">
						<h5 className="footer__link-title">Contact</h5>
						<ListGroup className="footer__quick-links">
							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex  align-items-center gap-2">
									<span>
										<i className="ri-map-pin-line"></i>
									</span>
                  Address:
								</h6>
                <p className="mb-0">Agra, India</p>
							</ListGroupItem>
							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex  align-items-center gap-2">
									<span>
										<i className="ri-mail-line"></i>
									</span>
                  Email:
								</h6>
                <p className="mb-0">journea@gmail.com</p>
							</ListGroupItem>
							<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
								<h6 className="mb-0 d-flex  align-items-center gap-2">
									<span>
										<i className="ri-phone-line"></i>
									</span>
                  Phone:
								</h6>
                <p className="mb-0">1800-555-895</p>
							</ListGroupItem>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
