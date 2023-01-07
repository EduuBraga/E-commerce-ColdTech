import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Provider/ProductsCartProvider";

import { ModalCart } from "../ModalCart";
import { ToggleTitle } from "../ToggleTitle";

import { Container, NavBar, ContainerLogo, FixedContactImg } from "./styles";

export const Header = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [display, setDisplay] = useState(false);

  const { totalProductsCart } = useContext(CartContext);

  return (
    <Container >
      <ToggleTitle setDisplay={setDisplay} />

      <ContainerLogo>
        <Link to='/'>
          <img src='/assets/images/icons/logo.png' alt="Logo da cold tech" />
          <span>ColdTech</span>
        </Link>
      </ContainerLogo>

      <NavBar displayIsOn={display}>
        <div>
          <Link to='/explore'>
            <img src='/assets/images/icons/explore-white.png' alt="Shop" />
            Explorar
          </Link>
        </div>
        <div>
          <Link to='/contact'>
            <img src='/assets/images/icons/contact-white.png' alt="Contato" />
            <p>Fale Conosco</p>
          </Link>
        </div>
        <div>
          <img src='/assets/images/icons/profile-white.png' alt="Search" />
          <p>
            <span>Entrar</span> ou <br />
            se <span>Cadastrar</span>
          </p>
        </div>

        <div onClick={() => { setVisibleModal(true) }}>
          <img src='/assets/images/icons/cart-white.png' alt="Search" />
          <span>{totalProductsCart}</span>
        </div>
      </NavBar>

      <ModalCart setVisibleModal={setVisibleModal} visibleModal={visibleModal} />

      <FixedContactImg>
        <Link to='/contact'>
          <img src='/assets/images/icons/contact-white.png' alt="Entre em contato conosco" />
        </Link>
      </FixedContactImg>
    </Container>
  )
}