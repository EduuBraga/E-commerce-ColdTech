import React, { useContext } from "react";
import { CartContext } from "../../Provider/ProductsCartProvider";

import ImgCloseURL from '../../assets/images/icons/close.png';

import {
  CardProduct,
  Container,
  ContainerDeleteItem,
  ContentProduct,
  ContainerDescriptionProduct,
  ContainerIncAndDec
} from "./styles";

export const ProductsCart = () => {
  const {
    productsInCart,
    IncQtyProductInCart,
    DecQtyProductInCart,
    removeProductCart,
    formatNumber
  } = useContext(CartContext);

  return (
    <Container>
      {productsInCart.map((product, key) =>
        <CardProduct key={key}>
          <ContentProduct>
            <div>
              <img
                src={`data:image/png;base64,${product.imgBase64}`}
                alt="Produto no carrinho"
              />
            </div>

            <ContainerDescriptionProduct>
              <h4>{product.name}</h4>
              <p>{formatNumber(product.value)}</p>

              <ContainerIncAndDec>
                <button
                  title="Remover uma unidade do produto"
                  onClick={_ => DecQtyProductInCart(product._id)}
                > -
                </button>

                {product.qty}

                <button
                  title="Adicionar uma unidade do produto"
                  onClick={_ => IncQtyProductInCart(product._id)}
                > +
                </button>
              </ContainerIncAndDec>
            </ContainerDescriptionProduct>
          </ContentProduct>
          <ContainerDeleteItem>
            <img
              title="Remover produto do carrinho"
              onClick={_ => removeProductCart(product._id)}
              src={ImgCloseURL}
              alt="Remover produto"
            />
          </ContainerDeleteItem>
        </CardProduct>
      )}
    </Container>
  )
}