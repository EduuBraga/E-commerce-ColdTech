import React from "react"
import { Footer } from "../../Components/Footer/index"
import { NavShop } from "../../Components/NavShop/index"

import { Link } from "react-router-dom"

import { Container, ContainerNotebook, ContainerAcessorios, ContainerCPU, ContainerMonitores } from "./styles"

export function PageShop() {
  return (
    <>
      <NavShop />
      <Container>

        <Link to='/shop/notebooks'>
          <ContainerNotebook>
            <h2>Notebooks</h2>
          </ContainerNotebook>
        </Link>

        <Link to='/shop/cpus'>
          <ContainerCPU>
            <h2>CPU</h2>
          </ContainerCPU>
        </Link>

        <Link to='/shop/accessories'>
          <ContainerAcessorios>
            <h2>Acessórios</h2>
          </ContainerAcessorios >
        </Link>

        <Link to='/shop/monitores'>
          <ContainerMonitores>
            <h2>Monitores</h2>
          </ContainerMonitores>
        </Link>

      </Container>
      <Footer />
    </>
  )
}