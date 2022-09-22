import React from "react";
import { Link } from "react-router-dom";

import { Container, CardColdTech, CardLinks, Media, Copyright } from "./styles";

import logo from '../../assets/images/icons/logo.png'
import facebook from '../../assets/images/icons/facebook.png'
import twitter from '../../assets/images/icons/twitter.png'
import instagram from '../../assets/images/icons/instagram.png'

export function Footer() {
  return (
    <>
      <Container>
        <CardColdTech>
          <div>
            <img src={logo} ></img>
            <h4>ColdTech</h4>
          </div>
          <a href="mailto:ColdTech@gamil.com">ColdTech@gmail.com</a>
          <p>+55 85 99999 9999</p>

          <Media>
            <img src={facebook} alt="Conta ColdTech facebook" />
            <img src={instagram} alt="Conta ColdTech instagram" />
            <img src={twitter} alt="Conta ColdTech twitter" />
          </Media>
        </CardColdTech>

        <CardLinks>
          <h4>Atendimento ao cliente</h4>
          <Link to="/Contato">Ajuda & Contanto</Link>
          <Link to="/shop">Loja online</Link>
          <Link to='/'>Home</Link>

        </CardLinks>
      </Container>
      <Copyright>Copyright 2022. all rights reserved </Copyright>
    </>
  )
}