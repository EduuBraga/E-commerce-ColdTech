import React from "react";

import { Container, Product, Products } from './styles'

import Compute from '../../assets/images/Compute.png'
import Notebook from '../../assets/images/notebook.png'
import Accessories from '../../assets/images/keyboard-mouse.png'
import Screen from '../../assets/images/screen.png'

export function Shop() {
  return (
    <Container>
      <Products>
        <Product>
          <img src={Notebook} alt="" />
          <h3>Notebooks</h3>
        </Product>
        <Product>
          <img src={Compute} alt="" />
          <h3>Computadores</h3>
        </Product>
        <Product>
          <img src={Screen} alt="" />
          <h3>Monitores</h3>
        </Product>
        <Product>
          <img src={Accessories} alt="" />
          <h3>Acessórios</h3>
        </Product>
      </Products>
    </Container>
  )
}