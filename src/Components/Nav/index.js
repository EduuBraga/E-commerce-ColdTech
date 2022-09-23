import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import search from '../../assets/images/icons/search.png'
import profile from '../../assets/images/icons/profile.png'
import cart from '../../assets/images/icons/cart.png'
import logo from '../../assets/images/icons/logo.png'

import { Container, NavBar, Services } from "./styles";

export function Nav() {
  const [borderBottom, setBorderBottom] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(JSON.stringify(window.location.href))
    console.log(url.includes('/shop'))

    if (url.includes('/contact')) {
      setBorderBottom('contact')
    } else if (url.includes('shop')) {
      setBorderBottom('shop')
    } else {
      setBorderBottom('home')
    }
  })

  return (
    <Container >
      <div>
        <Link to='/'><img src={logo} alt="Logo da cold tech" ></img></Link>
      </div>

      <NavBar borderIsOn={borderBottom}>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/contanto'>Contact</Link>
      </NavBar>

      <Services>
        <div>
          <img src={search} alt="Search" />
          <p>Pesquisar</p>
        </div>
        <div>
          <img src={cart} alt="Search" />
          <p>Carrinho</p>
        </div>
        <div>
          <img src={profile} alt="Search" />
          <p>Perfil</p>
        </div>
      </Services>
    </Container>
  )
}