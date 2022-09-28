import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link } from "react-router-dom"

import { Data } from "../../Services/Data"

import { Footer } from "../../Components/Footer"
import { Nav } from "../../Components/Nav"
import { ButtonGlobal } from "../../Components/Button/styles"

import cartURLImg from '../../assets/images/icons/cart-white.png'
import HomeURLImg from '../../assets/images/icons/home.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'

import { CardMonitor, Container, Breadcrumb } from "./styles"

export function PageMonitores() {
  const monitores = Data.filter((product) => product.tittle === 'monitores')
  const { AddProductCart, brokenNumber } = useContext(CartContext)

  return (
    <>
      <Nav />
      <Breadcrumb>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <Link to="/explorar">Explorar</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Monitores</p>
      </Breadcrumb>
      <Container>
        {monitores.map(monitor =>
          <CardMonitor key={monitor.id}>
            <h4>{monitor.name}</h4>
            <img src={monitor.src} alt='Monitor gamer' />
            <h4>{monitor.description.msg}</h4>
            <p>A partir de R$ {brokenNumber(monitor.valor)}</p>

            <div key={monitor.id}>
              <li>{monitor.description.nota1}</li>
              <li>{monitor.description.nota2}</li>
              <li>{monitor.description.nota3}</li>
              <li>{monitor.description.nota4}</li>
            </div>
            <ButtonGlobal onClick={() => { AddProductCart(monitor.id) }}><img src={cartURLImg} alt="Carrinho" /> Pôr no Carrinho</ButtonGlobal>
          </CardMonitor>
        )}
      </Container>

      <Footer />
    </>
  )
}