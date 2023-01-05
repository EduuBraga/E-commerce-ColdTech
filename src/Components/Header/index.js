import React from "react";
import { Link } from "react-router-dom";

import { Nav } from '../Nav/index'
import { ExplorarNavBar } from "../ExplorarNavBar/index"
import { ButtonGlobal } from "../Button/styles"

import pcGamer from '../../assets/images/pc-gamer.png'

import { ContainerHeader, Description } from "./styles"

export function Header() {
  return (
    <>
      <Nav />
      <ExplorarNavBar />
      <header>
        <ContainerHeader>
          <Description>
            <strong>Ofertas todos os dias</strong>
            <h1>Os melhores produtos do mundo tech é aqui!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam fugit quod ex nostrum velit?</p>
            <Link to='/explore' ><ButtonGlobal>Veja Mais</ButtonGlobal></Link>
          </Description>

          <div>
            <img src={pcGamer} alt="PC gamer e acessórios" />
          </div>
        </ContainerHeader>
      </header>
    </>
  )
}
