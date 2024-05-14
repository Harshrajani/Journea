/* eslint-disable no-unused-vars */
import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from "../assets/images/male-tourist.png"

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to get useful traveling information.</h2>
                <div className="newsletter__input">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <button className="newsletter__btn">Subscribe</button>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eum aperiam rerum minima facilis unde quis ex nihil nulla laboriosam.</p>
            </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="maletourist" />
                </div>
            </Col>

        </Row>
    </Container>
  </section>
}

export default Newsletter
