import React from "react"
import { Link } from "react-router-dom"

import { Header } from "../../Components/Header"
import { Breadchumb } from "../../Components/Breadchumb";
import { Footer } from "../../Components/Footer"

import {
  Container,
  ContainerNotebook,
  ContainerAcessorios,
  ContainerCPU,
  ContainerMonitores,
  WrapperPage
} from "./styles"

export function PageExplore() {
  return (
    <WrapperPage>
      <Header />
      <Breadchumb paths={['Explorar']} links={['']} />

      <Container>
        <Link to='/explore/notebooks'>
          <ContainerNotebook>
            <h2>Notebooks</h2>
          </ContainerNotebook>
        </Link>

        <Link to='/explore/computers'>
          <ContainerCPU>
            <h2>Computadores</h2>
          </ContainerCPU>
        </Link>

        <Link to='/explore/accessories'>
          <ContainerAcessorios>
            <h2>Acessórios</h2>
          </ContainerAcessorios >
        </Link>

        <Link to='/explore/monitors'>
          <ContainerMonitores>
            <h2>Monitores</h2>
          </ContainerMonitores>
        </Link>

      </Container>
      <Footer />
    </WrapperPage>
  );
};