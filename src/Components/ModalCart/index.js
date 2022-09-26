import React from "react"

import { ProductsCart } from "../ProductsCart"
import { ButtonGlobal } from "../../Components/Button/styles"

import ImgCloseURL from '../../assets/images/icons/close.png'
import ImgCartWhiteURL from '../../assets/images/icons/cart-white.png'

import { Container, ContainerClose, WrapperButton} from "./styles"

export function ModalCart({ setVisibleModal }) {

  return (
    <Container>
      <ContainerClose>
        <img onClick={() => { setVisibleModal(false) }} src={ImgCloseURL} alt="Fechar" />
      </ContainerClose>

      <h2> <img src={ImgCartWhiteURL} alt='Carrinho' /> Carrinho</h2>

      <ProductsCart></ProductsCart>

      <WrapperButton>
        <ButtonGlobal><img src={ImgCartWhiteURL} alt="Carrinho" /> Ir para o Checkuot</ButtonGlobal>
      </WrapperButton>
    </Container>
  )
}