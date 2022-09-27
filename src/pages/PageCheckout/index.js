import React, { useContext, useEffect } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link } from "react-router-dom"

import CloseURLImg from '../../assets/images/icons/close-black.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'
import HomeURLImg from '../../assets/images/icons/home.png'
import { ButtonGlobal } from '../../Components/Button/styles'

import {  Nav,Container, CartItem,WrapperRemoveItem, WrapperProduct, ContainerBottom } from "./styles"

export function PageCheckout() {
  const { productsCart, AddAProductToCart, removeAProductToCart, removeProductCart, setAllPrice, allPrice, brokenNumber } = useContext(CartContext)

  useEffect(() => {
    function getTotal(total, product) {
      return total + (product.qty * product.valor)
    }
    const totalAllPrices = productsCart.reduce(getTotal, 0).toLocaleString('pt-BR')

    setAllPrice(totalAllPrices)
  }, [productsCart])

  return (
    <>
      
      <Container>
      <Nav>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <Link to="/explorar">Explorar</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Checkout</p>
      </Nav>
        {productsCart.map((product) =>
          <CartItem key={product.id}>
            <WrapperProduct>
              <div>
                <img src={product.src} alt="Produto no carrinho" />
              </div>
              <div>
                <h4>{product.name}</h4>
                <p>R$ {brokenNumber(product.valor)} </p>
                <div>
                  <button onClick={() => { removeAProductToCart(product.id) }}>-</button>
                  {product.qty}
                  <button onClick={() => { AddAProductToCart(product.id) }}>+</button>
                </div>
              </div>
            </WrapperProduct>
            <WrapperRemoveItem>
              <img onClick={() => { removeProductCart(product.id) }} src={CloseURLImg} alt="Remover produto" />
            </WrapperRemoveItem>
          </CartItem>
        )}
        <ContainerBottom>
          <p>Total: R$ <span>{allPrice}</span></p>
          <ButtonGlobal onClick={() => { }}>Comprar</ButtonGlobal>
        </ContainerBottom>
      </Container>
    </>
  )
}