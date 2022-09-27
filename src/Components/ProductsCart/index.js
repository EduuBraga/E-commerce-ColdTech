import React, { useContext, useEffect } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"

import ImgCloseURL from '../../assets/images/icons/close.png'

import { CartItem, Container, WrapperTrash, WrapperProduct, ContainerTotal } from "./styles"

export function ProductsCart() {
  const { productsCart, AddAProductToCart, removeAProductToCart, removeProductCart, setAllPrice, allPrice } = useContext(CartContext)

  useEffect(() => {
    function getTotal(total, product) {
      return total + (product.qty  * product.valor)
    }
    const totalAllPrices = productsCart.reduce(getTotal, 0).toLocaleString('pt-BR')
    
    setAllPrice(totalAllPrices)
  }, [productsCart])

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
      <ContainerTotal>
        <span>Total: R$ {allPrice}</span>
      </ContainerTotal>
    </Container>
  )
}