/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "./ServiceCard";

import { Col } from "reactstrap";

import weatherIMg from "../assets/images/weather.png";
import guideIMg from "../assets/images/guide.png";
import CustomizationIMg from "../assets/images/customization.png";

const servicesData = [
	{
		imgUrl: weatherIMg,
		title: "Calculate Weather",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		imgUrl: guideIMg,
		title: "Best Tour Guide",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		imgUrl: CustomizationIMg,
		title: "Customization ",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	},
];

const ServiceList = () => {
	return <>
		{servicesData.map((item, index) => (
			<Col lg="3" key={index}>
				<ServiceCard item={item} />
			</Col>
		))}
	</>
};

export default ServiceList;
