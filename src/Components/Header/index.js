import React from "react";
import { ContainerHeader, Description } from "./styles"
import { ButtonGlobal } from "../Button/styles"

import pcGamer from '../../assets/images/pc-gamer.png'
import { Nav } from '../Nav/index'


export function Header() {
  return (
    <>
      <Nav />
      <header>


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
    </>
  )
}
