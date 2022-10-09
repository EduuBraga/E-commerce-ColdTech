import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Link, useNavigate } from "react-router-dom"

import CloseURLImg from '../../assets/images/icons/close-black.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'
import HomeURLImg from '../../assets/images/icons/home.png'
import checkURLImg from '../../assets/images/icons/check.png'
import { ButtonGlobal } from '../../Components/Button/styles'
import { ModalCheckout } from "../../Components/ModalCheckout"
import { Nav as NavBar } from "../../Components/Nav"

import { Breadchumb, Container, CartItem, WrapperRemoveItem, WrapperProduct, ContainerBottom } from "./styles"

export function PageCheckout() {
  const { productsCart, AddAProductToCart, removeAProductToCart, removeProductCart, allPrice, brokenNumber } = useContext(CartContext)
  const [visibleModalCheckout, setVisibleModalCheckout] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    console.log(productsCart.length)
    if (productsCart.length === 0) {
      navigate('/explorar')
    }
  })

  return (
    <>
      <NavBar />

      <Container>
        <Breadchumb>
          <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
          <Link to="/">Home</Link>
          <img src={ArrowURLImg} alt="Seta" />
          <Link to="/explorar">Explorar</Link>
          <img src={ArrowURLImg} alt="Seta" />
          <p>Checkout</p>
        </Breadchumb>
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
                  <button title="Remover uma unidade do produto" onClick={() => { removeAProductToCart(product.id) }}>-</button>
                  {product.qty}
                  <button title="adicionar uma unidade do produto" onClick={() => { AddAProductToCart(product.id) }}>+</button>
                </div>
              </div>
            </WrapperProduct>
            <WrapperRemoveItem>
              <img title="Remover produto do carrinho" onClick={() => { removeProductCart(product.id) }} src={CloseURLImg} alt="Remover produto" />
            </WrapperRemoveItem>
          </CartItem>
        )}
        <ContainerBottom>
          <p>Total: R$ <span>{allPrice}</span></p>
          <ButtonGlobal onClick={() => { setVisibleModalCheckout(true) }}><img src={checkURLImg} alt="Finalizar compra" /> Finalizar compra</ButtonGlobal>
        </ContainerBottom>
        {visibleModalCheckout && <ModalCheckout visibleModalCheckout={visibleModalCheckout} setVisibleModalCheckout={setVisibleModalCheckout} />}
      </Container>
    </>
  )
}