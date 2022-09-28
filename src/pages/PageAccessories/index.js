import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link } from "react-router-dom"

import { Data } from "../../Services/Data"

import { Nav } from "../../Components/Nav"
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer"

import HomeURLImg from '../../assets/images/icons/home.png'
import cartURLImg from '../../assets/images/icons/cart-white.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'

import { Breadcrumb, Container, CardAccessories } from "./styles"

export function PageAccessories() {
  const acessories = Data.filter((product) => product.tittle === 'acessorios')
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
        <p>Acessórios</p>
      </Breadcrumb>
      <Container>
        {acessories.map(accessory =>
          <CardAccessories key={accessory.id}>
            <h4>{accessory.name}</h4>
            <img src={accessory.src} alt="HeadSet" />
            <h4>{accessory.description.msg}</h4>
            <p>A partir de R$ {brokenNumber(accessory.valor)}</p>

            <div key={accessory.id}>
              <li>{accessory.description.nota1}</li>
              <li>{accessory.description.nota2}</li>
              <li>{accessory.description.nota3}</li>
            </div>
            <ButtonGlobal onClick={() => { AddProductCart(accessory.id) }}><img src={cartURLImg} alt="Carrinho" /> Pôr no Carrinho</ButtonGlobal>
          </CardAccessories>
        )}

      </Container>

      <Footer />
    </>
  )
}