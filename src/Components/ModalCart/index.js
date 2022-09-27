import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link } from "react-router-dom"

import { ProductsCart } from "../ProductsCart"
import { ButtonGlobal } from "../../Components/Button/styles"

import ImgCloseURL from '../../assets/images/icons/close.png'
import ImgCartWhiteURL from '../../assets/images/icons/cart-white.png'

import { Container, ContainerClose, ContainerNoItem, WrapperButton } from "./styles"


export function ModalCart({ setVisibleModal }) {
  const { productsCart } = useContext(CartContext)

  return (
    <Container>
      <ContainerClose>
        <img onClick={() => { setVisibleModal(false) }} src={ImgCloseURL} alt="Fechar" />
      </ContainerClose>

      <h2> <img src={ImgCartWhiteURL} alt='Carrinho' /> Carrinho</h2>

      {productsCart.length ? (
        <ProductsCart />
      ) : (
        <ContainerNoItem>
          <h3>Não a item no carrinho</h3>
          <p>Dê uma olhada nos nossos produtos<br /> clicando no botão abaixo</p>
          <Link to='/explorar'><ButtonGlobal>Clique Aqui</ButtonGlobal></Link>
        </ContainerNoItem>
      )
      }

      <WrapperButton>
        <ButtonGlobal><img src={ImgCartWhiteURL} alt="Carrinho" /> Ir para o Checkuot</ButtonGlobal>
      </WrapperButton>
    </Container>
  )
}