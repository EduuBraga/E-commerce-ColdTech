import React from "react";

import { Link } from "react-router-dom";

import search from '../../assets/images/search.png'
import profile from '../../assets/images/profile.png'
import cart from '../../assets/images/cart.png'
import logo from '../../assets/images/logo.png'

import { Container, Services } from "./styles";

export function Nav(){
  return(
    <Container>
        <div>
          <Link to='/'><img src={logo} alt="Logo da cold tech" ></img></Link>
        </div>

        <nav>
          <a>Home</a>
          <a>Shop</a>
          <a>Contact</a>
        </nav>

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