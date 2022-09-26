import React from "react"
import { Link } from "react-router-dom"

import { Nav } from "../../Components/Nav/index"
import { Footer } from "../../Components/Footer/index"

import { Container, ContainerNotebook, ContainerAcessorios, ContainerCPU, ContainerMonitores } from "./styles"

export function PageExplorar() {
  return (
    <>
      <Nav/>
      <Container>

        <Link to='/explorar/notebooks'>
          <ContainerNotebook>
            <h2>Notebooks</h2>
          </ContainerNotebook>
        </Link>

        <Link to='/explorar/cpus'>
          <ContainerCPU>
            <h2>CPU</h2>
          </ContainerCPU>
        </Link>

        <Link to='/explorar/accessories'>
          <ContainerAcessorios>
            <h2>Acessórios</h2>
          </ContainerAcessorios >
        </Link>

        <Link to='/explorar/monitores'>
          <ContainerMonitores>
            <h2>Monitores</h2>
          </ContainerMonitores>
        </Link>

      </Container>
      <Footer />
    </>
  )
}