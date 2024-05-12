// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import SearchList from "../services/ServiceList"

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import herovid from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png"

import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";

import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

const Home = () => {
	return (
		<>
		<section>
			<Container className="home__container">
				<Row>
					<Col lg="6">
						<div className="hero__content">
							<div className="hero__subtitle d-flex align-items-center">
								<Subtitle subtitle={"Know before You Go"} />
								<img src={worldImg} alt="" />
							</div>
							<h1>
								Traveling opens the door to creating
								<span className="highlight">Memories</span>
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								mollitia laborum consequatur molestiae tempora adipisci illum
								recusandae necessitatibus eaque reprehenderit.
							</p>
						</div>
					</Col>

					<Col lg="2">
						<div className="hero__img-box">
							<img src={heroImg} alt="" />
						</div>
					</Col>
					<Col lg="2">
						{" "}
						<div className="hero__img-box mt-4" >
							<video src={herovid} alt="" controls />
						</div>
					</Col>
					<Col lg="2">
						{" "}
						<div className="hero__img-box mt-5">
							<img src={heroImg2} alt="" />
						</div>
					</Col>
          <SearchBar />
				</Row>
			</Container>
		</section>
		
		{/* ======= hero section start =======*/}
		<section>
			<Container>
				<Row>
					<Col lg='3'>
						<h5 className="services__subtitle">
							What we Serve
						</h5>
						<h2 className="services__title">
							We offer our best services
						</h2>
					</Col>
					<SearchList />
				</Row>
			</Container>
		</section>

		{/* ======= featured tour section start ======== */}
		<section>
			<Container>
				<Row>
					<Col lg='12' className="mb-5">
						<Subtitle subtitle={"Explore"}/>
						<h2 className="featured__tour-title">
							Our Featured Tours
						</h2>
					</Col>
					<FeaturedTourList />
				</Row>
			</Container>
		</section>

		{/* ======= featured tour section end ======== */}

		{/* ======= experience section start ======== */}
		<section>
			<Container>
				<Row>
					<Col lg='6'>
					<div className="experience__content">
					<Subtitle  subtitle={"Experience"}/>
					<h2>
						With our all experience <br /> we will serve you
					</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					<br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					</div>
					<div className="counter__wrapper d-flex align-items-center gap-5">
						<div className="counter__box">
							<span>12k+</span>
							<h6>Successful trip</h6>
						</div>
						<div className="counter__box">
							<span>2k+</span>
							<h6>Regular Clients</h6>
						</div>
						<div className="counter__box">
							<span>15</span>
							<h6>Years Experience</h6>
						</div>
					</div>
					</Col>
					<Col lg='6'>
						<div className="experience__img">
							<img src={experienceImg} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>

		{/* ======= experience section end ======== */}
			
		</>
	);
};

export default Home;
