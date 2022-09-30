import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link } from "react-router-dom"

import { ProductsCart } from "../ProductsCart"
import { ButtonGlobal } from "../../Components/Button/styles"

import ImgCloseURL from '../../assets/images/icons/close.png'
import ImgCartWhiteURL from '../../assets/images/icons/cart-white.png'

import { Container, ContainerTop, ContainerNoItem, ImgClose, ContainerTotal, ButtonNoItem, ContainerButton } from "./styles"

export function ModalCart({ setVisibleModal }) {
  const { productsCart, allPrice } = useContext(CartContext)

  return (
    <Container>

      <ContainerTop>
        <ImgClose onClick={() => { setVisibleModal(false) }} src={ImgCloseURL} alt="Fechar carrinho" />
        <div>
          <img src={ImgCartWhiteURL} alt='Carrinho' />
          <h2>  Carrinho</h2>
        </div>
      </ContainerTop>

      {productsCart.length ? (
        <ProductsCart />
      ) : (
        <ContainerNoItem>
          <h3>Não a item no carrinho</h3>
          <p>Dê uma olhada nos nossos produtos<br /> clicando no botão abaixo</p>
          <Link to='/explorar'><ButtonGlobal>Clique Aqui</ButtonGlobal></Link>
        </ContainerNoItem>
      )}

      {productsCart.length ? (
        <ContainerButton>
          <ContainerTotal>
            <span>Total: R$ {allPrice}</span>
          </ContainerTotal>
          <Link to="/checkout">
            <ButtonGlobal><img src={ImgCartWhiteURL} alt="Carrinho" /> Ir para o Checkuot</ButtonGlobal>
          </Link>
        </ContainerButton>
      ) : (
        <ContainerButton>
          <ButtonNoItem><img src={ImgCartWhiteURL} alt="Carrinho" /> Ir para o Checkout</ButtonNoItem>
        </ContainerButton>
      )}
    </Container>
  )
}