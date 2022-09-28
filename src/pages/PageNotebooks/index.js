import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link } from "react-router-dom"

import { Data } from "../../Services/Data"

import { Nav } from "../../Components/Nav/index"
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer/index"

import HomeURLImg from '../../assets/images/icons/home.png'
import cartURLImg from '../../assets/images/icons/cart-white.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'

import { Container, CardNotebook, Breadcrumb, WrapperButton } from "./styles"

export function PageNotebook() {
  const Notebooks = Data.filter((product) => product.tittle === 'notebooks')
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
        <p>Notebooks</p>
      </Breadcrumb>
      <Container>
        {Notebooks.map((notebook) =>
          <CardNotebook key={notebook.id}>
            <h4>{notebook.name}</h4>
            <img src={notebook.src} />
            <h4>{notebook.description.msg}</h4>
            <p>A partir de R$ {brokenNumber(notebook.valor)}</p>

            <div key={notebook.id}>
              <li>{notebook.description.nota1}</li>
              <li>{notebook.description.nota2}</li>
              <li>{notebook.description.nota3}</li>
            </div>
            <ButtonGlobal onClick={() => { AddProductCart(notebook.id) }}><img src={cartURLImg} alt="Carrinho" /> Pôr no Carrinho</ButtonGlobal>
          </CardNotebook>
        )}
      </Container>
      <Footer />
    </>
  )
}