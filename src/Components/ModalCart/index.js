import React from "react";

import { Container, ContainerClose, ProductsCart, WrapperButton } from "./styles"
import { ButtonGlobal } from "../../Components/Button/styles"

import close from '../../assets/images/icons/close.png'
import cart from '../../assets/images/icons/cart.png'

export function ModalCart({ setVisibleModal }) {
  return (
    <Container>
      <ContainerClose>
        <img onClick={() => { setVisibleModal(false) }} src={close} alt="Fechar" />
      </ContainerClose>

      <h2>Carrinho</h2>


      <ProductsCart>
    
      </ProductsCart>

      <WrapperButton>
        <ButtonGlobal><img src={cart} alt="Carrinho" /> Ir para o Checkuot</ButtonGlobal>
      </WrapperButton>
    </Container>
  )
}