import React from "react";
import { Nav, Services, ContainerHeader, Description } from "./styles";

import search from '../../assets/images/search.png'
import profile from '../../assets/images/profile.png'
import cart from '../../assets/images/cart.png'
import logo from '../../assets/images/logo.png'
import pcGamer from '../../assets/images/pc-gamer.png'
import { ButtonGlobal } from "../Button/styles";

export function Header() {
  return (
    <header>
      <Nav>
        <div><img src={logo} alt="" /></div>

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
      </Nav>

      <ContainerHeader>
        <Description>
          <h1>Os melhores produtos do mundo tech é aqui!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam fugit quod ex nostrum velit?</p>
          <ButtonGlobal>Saiba mais</ButtonGlobal>
        </Description>

        <div>
          <img src={pcGamer} alt="" />
        </div>
      </ContainerHeader>

    </header>
  )
}
