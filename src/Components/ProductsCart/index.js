import React, { useContext } from "react"
import { CartContext } from "../../Provider/StatesProvider"

import ImgCloseURL from '../../assets/images/icons/close.png'

import { CartItem, Container, WrapperTrash, WrapperProduct } from "./styles"

export function ProductsCart() {
  const { productsCart, AddAProductToCart, removeAProductToCart, removeProductCart } = useContext(CartContext)

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
              <p>R$ {product.valor} </p>
              <div>
                <button onClick={() => { removeAProductToCart(product.id) }}>-</button>
                {product.qty}
                <button onClick={() => { AddAProductToCart(product.id) }}>+</button>
              </div>
            </div>
          </WrapperProduct>
          <WrapperTrash>
            <img onClick={() => { removeProductCart(product.id) }} src={ImgCloseURL} alt="Remover produto" />
          </WrapperTrash>
        </CartItem>
      )}
    </Container>
  )
}