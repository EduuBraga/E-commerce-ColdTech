import React from "react";
import { Link } from "react-router-dom";

import Compute from '../../assets/images/icons/Compute.png';
import Notebook from '../../assets/images/icons/notebook.png';
import Accessories from '../../assets/images/icons/keyboard-mouse.png';
import Screen from '../../assets/images/icons/screen.png';

import { Container, Product, Content } from './styles';

export function ExploreNavBar() {
  return (
    <Container>
      <Content>
        <Link to='/explore/notebooks'>
          <Product>
            <img src={Notebook} alt="Notebook gamer" />
            <h3>Notebooks</h3>
          </Product>
        </Link>

        <Link to='/explore/computers'>
          <Product>
            <img src={Compute} alt="CPUs games" />
            <h3>Computadores</h3>
          </Product>
        </Link>

        <Link to='/explore/monitors'>
          <Product>
            <img src={Screen} alt="Monitores games" />
            <h3>Monitores</h3>
          </Product>
        </Link>

        <Link to='/explore/accessories'>
          <Product>
            <img src={Accessories} alt="Acessórios games" />
            <h3>Acessórios</h3>
          </Product>
        </Link>
      </Content>
    </Container>
  )
}