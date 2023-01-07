import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  CardColdTech,
  CardLinks,
  Media,
  Copyright,
  ContainerCards
} from "./styles";

export function Footer() {
  return (
    <>
      <footer>
        <Container>
          <ContainerCards>
            <CardColdTech>
              <div>
                <img src='/assets/images/icons/logo.png' alt="Logo da ColdTech"></img>
                <h4>ColdTech</h4>
              </div>
              <a href="mailto:ColdTech@gamil.com">ColdTech@gmail.com</a>
              <a>+55 85 99999 9999</a>
              <Media>
                <img src='/assets/images/icons/facebook.png' alt="Conta ColdTech facebook" />
                <img src='/assets/images/icons/instagram.png' alt="Conta ColdTech instagram" />
                <img src='/assets/images/icons/twitter.png' alt="Conta ColdTech twitter" />
              </Media>
            </CardColdTech>
            <CardLinks>
              <h4>Atendimento ao cliente</h4>
              <Link to="/contact">Ajuda & Contanto</Link>
              <Link to="/explore">Loja online</Link>
              <Link to='/'>Home</Link>
            </CardLinks>
          </ContainerCards>
          <Copyright>Copyright 2022. all rights reserved </Copyright>
        </Container>

      </footer>
    </>
  );
};