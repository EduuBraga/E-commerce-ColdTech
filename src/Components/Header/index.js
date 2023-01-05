import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "../../Provider/ProductsCartProvider";

import profileImgURL from '../../assets/images/icons/profile-white.png';
import exploreImgURL from '../../assets/images/icons/explore-white.png';
import contactImgURL from '../../assets/images/icons/contact-white.png';
import cartImgURL from '../../assets/images/icons/cart-white.png';
import logoImgURL from '../../assets/images/icons/logo.png';

import { ModalCart } from "../ModalCart";

import { Container, NavBar, ContainerLogo, FixedContactImg } from "./styles";

export const Header = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [display, setDisplay] = useState(false);
  const { pathname } = useLocation();

  const { totalProductsCart } = useContext(CartContext);

  useEffect(() => {
    if (pathname.includes('/contact')) {
      document.title = 'ColdTech | Fale Conosco';
      setDisplay(true);
    }
    else if (pathname.includes('/notebooks')) {
      document.title = 'ColdTech | Explorar - Notebooks';
      setDisplay(false);
    }
    else if (pathname.includes('/computers')) {
      document.title = 'ColdTech | Explorar - CPUs';
      setDisplay(false);
    }
    else if (pathname.includes('/monitors')) {
      document.title = 'ColdTech | Explorar - Monitores';
      setDisplay(false);
    }
    else if (pathname.includes('/accessories')) {
      document.title = 'ColdTech | Explorar - Acessórios';
      setDisplay(false);
    }
    else if (pathname.includes('/explore')) {
      document.title = 'ColdTech | Explorar';
      setDisplay(false);
    }
    else if (pathname.includes('/checkout')) {
      document.title = 'ColdTech | Checkout';
      setDisplay(false);
    }
    else {
      document.title = 'ColdTech';
      setDisplay(true);
    };
  }, [pathname])

  return (
    <Container >
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