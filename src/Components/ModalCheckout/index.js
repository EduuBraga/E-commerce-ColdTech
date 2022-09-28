import React,{ useContext }from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"

import homeImgURL from '../../assets/images/icons/home-white.png'
import { ButtonGlobal } from "../Button/styles"

import { Container, CardModal, WrapperButton } from "./styles"

export function ModalCheckout({setVisibleModalCheckout}) {
  const {RemoveAllProducts} = useContext(CartContext)

  function handleClick(){
    setVisibleModalCheckout(false)
    RemoveAllProducts()
  }

  return (
    <Container>
      <CardModal>
        <h2>Compra realizada com sucesso!</h2>

        <WrapperButton>
          <ButtonGlobal onClick={handleClick}><img src={homeImgURL} alt="Home" /> Voltar a home</ButtonGlobal>
        </WrapperButton>
      </CardModal>
    </Container>
  )
}