import React from "react";

import { Link } from "react-router-dom";

import { Container, Product, Products } from './styles'

import Compute from '../../assets/images/icons/Compute.png'
import Notebook from '../../assets/images/icons/notebook.png'
import Accessories from '../../assets/images/icons/keyboard-mouse.png'
import Screen from '../../assets/images/icons/screen.png'

export function Shop() {
  return (
    <Container>
      <Products>
        <Link to='/shop/notebooks'>
          <Product>
            <img src={Notebook} alt="" />
            <h3>Notebooks</h3>
          </Product>
        </Link>

        <Link to='/shop/cpus'>
          <Product>
            <img src={Compute} alt="" />
            <h3>Computadores</h3>
          </Product>
        </Link>

        <Link to='/shop/monitores'>
          <Product>
            <img src={Screen} alt="" />
            <h3>Monitores</h3>
          </Product>
        </Link>

        <Link to='/shop/acessorios'>
          <Product>
            <img src={Accessories} alt="" />
            <h3>Acessórios</h3>
          </Product>
        </Link>
      </Products>
    </Container>
  )
}