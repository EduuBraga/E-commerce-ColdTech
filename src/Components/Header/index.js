import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Provider/ProductsCartProvider";

import profileImgURL from '../../assets/images/icons/profile-white.png';
import exploreImgURL from '../../assets/images/icons/explore-white.png';
import contactImgURL from '../../assets/images/icons/contact-white.png';
import cartImgURL from '../../assets/images/icons/cart-white.png';
import logoImgURL from '../../assets/images/icons/logo.png';

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
          <img src={logoImgURL} alt="Logo da cold tech" />
          <span>ColdTech</span>
        </Link>
      </ContainerLogo>

      <NavBar displayIsOn={display}>
        <div>
          <Link to='/explore'>
            <img src={exploreImgURL} alt="Shop" />
            Explorar
          </Link>
        </div>
        <div>
          <Link to='/contact'>
            <img src={contactImgURL} alt="Contato" />
            <p>Fale Conosco</p>
          </Link>
        </div>
        <div>
          <img src={profileImgURL} alt="Search" />
          <p>
            <span>Entrar</span> ou <br />
            se <span>Cadastrar</span>
          </p>
        </div>

        <div onClick={() => { setVisibleModal(true) }}>
          <img src={cartImgURL} alt="Search" />
          <span>{totalProductsCart}</span>
        </div>
      </NavBar>

      <ModalCart setVisibleModal={setVisibleModal} visibleModal={visibleModal} />

      <FixedContactImg>
        <Link to='/contact'>
          <img src={contactImgURL} alt="Entre em contato conosco" />
        </Link>
      </FixedContactImg>
    </Container>
  )
}