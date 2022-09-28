import React, { useContext, useEffect } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"

import ImgCloseURL from '../../assets/images/icons/close.png'

import { CartItem, Container, ContainerDeleteItem, WrapperProduct, ContainerTotal } from "./styles"

export function ProductsCart() {
  const { productsCart, AddAProductToCart, removeAProductToCart, removeProductCart, allPrice, brokenNumber } = useContext(CartContext)

  return (
    <Container>
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
          <ContainerDeleteItem>
            <img onClick={() => { removeProductCart(product.id) }} src={ImgCloseURL} alt="Remover produto" />
          </ContainerDeleteItem>
        </CartItem>
      )}
      <ContainerTotal>
        <span>Total: R$ {allPrice}</span>
      </ContainerTotal>
    </Container>
  )
}