/* eslint-disable no-unused-vars */
import React from "react"
import { Container,Row,Button } from "reactstrap"
import { NavLink, Link } from "react-router-dom"

import './header.css'

const nav__link=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]

const Header = () => {
  return (
    <header className="header">
      <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">

              {/* ======== logo ======= */}
              <div className="logo">
                <img src="#" alt="" /> Journea
              </div>
              {/* ======== logo end ======= */}

              {/* ======= Menu Start =======  */}

              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">

              {
                nav__link.map((item,index)=>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive?'active__link':""}>{item.display}</NavLink>
                  </li>
                ))  
              }

                </ul>
              </div>

              {/* ====== Menu End ======= */}

              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4 ">
                  <Button className="btn secondary__btn">
                    <Link to='/login'>Login</Link> </Button>
                  <Button className="btn primary__btn">
                    <Link to='/register'>Register</Link> </Button>
                </div>
              </div>


            </div>
          </Row>
      </Container>
    </header>
  )
}

export default Header
