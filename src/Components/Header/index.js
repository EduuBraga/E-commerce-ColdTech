import React from "react";
import { Link } from "react-router-dom";

import { ContainerHeader, Description } from "./styles"
import { ButtonGlobal } from "../Button/styles"

import pcGamer from '../../assets/images/pc-gamer.png'

import { Nav } from '../Nav/index'
import { Shop } from "../Shop/index";

export function Header() {
  return (
    <>
      <Nav />
      <Shop></Shop>
      <header>
        <ContainerHeader>
          <Description>
            <strong>Ofertas todos os dias</strong>
            <h1>Os melhores produtos do mundo tech é aqui!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam fugit quod ex nostrum velit?</p>
            <Link to='/shop' ><ButtonGlobal>Saiba mais</ButtonGlobal></Link>
          </Description>

          <div>
            <img src={pcGamer} alt="" />
          </div>
        </ContainerHeader>
      </header>
    </>
  )
}
