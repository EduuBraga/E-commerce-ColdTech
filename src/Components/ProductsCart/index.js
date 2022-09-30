import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"

import ImgCloseURL from '../../assets/images/icons/close.png'

import { CartItem, Container, ContainerDeleteItem, WrapperProduct} from "./styles"

export function ProductsCart() {
  const { productsCart, AddAProductToCart, removeAProductToCart, removeProductCart, brokenNumber } = useContext(CartContext)

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
                <button title="Remover uma unidade do produto" onClick={() => { removeAProductToCart(product.id) }}>-</button>
                {product.qty}
                <button title="Adicionar uma unidade do produto" onClick={() => { AddAProductToCart(product.id) }}>+</button>
              </div>
            </div>
          </WrapperProduct>
          <ContainerDeleteItem>
            <img title="Remover produto do carrinho" onClick={() => { removeProductCart(product.id) }} src={ImgCloseURL} alt="Remover produto" />
          </ContainerDeleteItem>
        </CartItem>
      )}
    </Container>
  )
}