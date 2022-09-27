import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

import profile from '../../assets/images/icons/profile.png'
import cart from '../../assets/images/icons/cart.png'
import logo from '../../assets/images/icons/logo.png'

import { ModalCart } from "../ModalCart"

import { Container, NavBar, Logo, Services, } from "./styles"

export function Nav() {
  const [visibleModal, setVisibleModal] = useState(false)
  const [borderBottom, setBorderBottom] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes('/contact')) {
      setBorderBottom('contact')
      document.title = 'ColdTech | Fale Conosco'
    } else if (pathname.includes('/explorar')) {
      document.title = 'ColdTech | Explorar'
      setBorderBottom('explorar')
    } else {
      setBorderBottom('home')
      document.title = 'ColdTech'
    }
  })

  return (
    <Container >
      <Logo>
        <Link to='/'><img src={logo} alt="Logo da cold tech" ></img></Link>
      </Logo>

      <NavBar borderIsOn={borderBottom}>
        <Link to='/'>Home</Link>
        <Link to='/explorar'>Explorar</Link>
        <Link to='/contact'>Contato</Link>
      </NavBar>

      <Services>
        <div>
          <img src={profile} alt="Search" />
          <p><span>Entrar</span> ou <br />se <span>Cadastrar</span></p>
        </div>

        <div onClick={() => { setVisibleModal(true) }}>
          <img src={cart} alt="Search" />
          <p>Carrinho</p>
        </div>
      </Services>

      {visibleModal && <ModalCart setVisibleModal={setVisibleModal} />}
    </Container>
  )
}