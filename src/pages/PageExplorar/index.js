import React from "react"
import { Link } from "react-router-dom"

import HomeURLImg from '../../assets/images/icons/home.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'

import { Nav } from "../../Components/Nav/index"
import { Footer } from "../../Components/Footer/index"

import { Container, Breadcrumb, ContainerNotebook, ContainerAcessorios, ContainerCPU, ContainerMonitores } from "./styles"

export function PageExplorar() {
  return (
    <>
      <Nav />
      <Breadcrumb>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Explorar</p>
      </Breadcrumb>
      <Container>

        <Link to='/explorar/notebooks'>
          <ContainerNotebook>
            <h2>Notebooks</h2>
          </ContainerNotebook>
        </Link>

        <Link to='/explorar/cpus'>
          <ContainerCPU>
            <h2>Computadores</h2>
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