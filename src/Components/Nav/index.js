import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import profile from '../../assets/images/icons/profile.png'
import cart from '../../assets/images/icons/cart.png'
import logo from '../../assets/images/icons/logo.png'

import { ModalCart } from "../ModalCart"
import { Container, NavBar, Logo,Services, } from "./styles"

export function Nav() {
  const [visibleModal, setVisibleModal] = useState(false)

  const [borderBottom, setBorderBottom] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(JSON.stringify(window.location.href))

    if (url.includes('/contact')) {
      setBorderBottom('contact')
      document.title = 'ColdTech | Fale Conosco'
    } else if (url.includes('shop')) {
      document.title = 'ColdTech | Shop'
      setBorderBottom('shop')
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
        <Link to='/shop'>Shop</Link>
        <Link to='/contact'>Contact</Link>
      </NavBar>

      <Services>
        <div>
          <img src={profile} alt="Search" />
          <p><span>Entrar</span> ou <br/>se <span>Cadastrar</span></p>
        </div>

        <div onClick={()=>{setVisibleModal(true)}}>
          <img src={cart} alt="Search" />
          <p>Carrinho</p>
        </div>
      </Services>

      {visibleModal && <ModalCart setVisibleModal={setVisibleModal}/>}
    </Container>
  )
}