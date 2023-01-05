import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"

import ImgCloseURL from '../../assets/images/icons/close.png'

import { CartItem, Container, ContainerDeleteItem, WrapperProduct } from "./styles"

export function ProductsCart() {
  const {
    productsInCart,
    AddAProductToCart,
    removeAProductToCart,
    removeProductCart,
    brokenNumber
  } = useContext(CartContext)

  return (
    <Container>
      {productsInCart.map((product, key) =>
        <CartItem key={key}>
          <WrapperProduct>
            <div>
              <img
                src={`data:image/png;base64,${product.imgBase64}`}
                alt="Produto no carrinho"
              />
            </div>

            <div>
              <h4>{product.name}</h4>
              <p>R$ {product.value} </p>
              {/* <p>R$ {brokenNumber(product.valor)} </p> */}
              <div>
                <button
                  title="Remover uma unidade do produto"
                  onClick={_ => removeAProductToCart(product._id) }
                > - </button>

                {product.qty}

                <button
                  title="Adicionar uma unidade do produto"
                  onClick={_ => AddAProductToCart(product._id) }
                > + </button>
              </div>
            </div>
          </WrapperProduct>
          <ContainerDeleteItem>
            <img
              title="Remover produto do carrinho"
              onClick={_ => removeProductCart(product._id) }
              src={ImgCloseURL}
              alt="Remover produto"
            />
          </ContainerDeleteItem>
        </CartItem>
      )}
    </Container>
  )
}