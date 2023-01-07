import React from "react";
import { Link } from "react-router-dom";

import { Container, Product, Content } from './styles';

export function ExploreNavBar() {
  return (
    <Container>
      <Content>
        <Link to='/explore/notebooks'>
          <Product>
            <img
              src='/assets/images/icons/notebook.png'
              alt="Notebook gamer"
            />
            <h3>Notebooks</h3>
          </Product>
        </Link>

        <Link to='/explore/computers'>
          <Product>
            <img
              src='/assets/images/icons/Compute.png'
              alt="CPUs games"
            />
            <h3>Computadores</h3>
          </Product>
        </Link>

        <Link to='/explore/monitors'>
          <Product>
            <img
              src='/assets/images/icons/keyboard-mouse.png'
              alt="Monitores games"
            />
            <h3>Monitores</h3>
          </Product>
        </Link>

        <Link to='/explore/accessories'>
          <Product>
            <img
              src='/assets/images/icons/screen.png'
              alt="Acessórios games"
            />
            <h3>Acessórios</h3>
          </Product>
        </Link>
      </Content>
    </Container>
  )
}