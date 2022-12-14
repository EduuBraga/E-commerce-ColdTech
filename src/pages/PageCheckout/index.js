import React, { useContext, useState } from "react";
import { CartContext } from "../../Provider/ProductsCartProvider";

import { Header } from "../../Components/Header";
import { Breadchumb } from "../../Components/Breadchumb";
import { ButtonGlobal } from '../../Components/Button/styles';
import { ModalCheckout } from "../../Components/ModalCheckout";

import {
  Container,
  CartItem,
  WrapperImgProduct,
  ContentProduct,
  ContainerIncAndDecQty,
  WrapperRemoveItem,
  WrapperProduct,
  ContainerBottom
} from "./styles";

export function PageCheckout() {
  const {
    productsInCart,
    IncQtyProductInCart,
    DecQtyProductInCart,
    removeProductCart,
    allPrice,
    formatNumber
  } = useContext(CartContext);

  const [visibleModalCheckout, setVisibleModalCheckout] = useState(false);

  return (
    <>
      <Header />
      <Breadchumb paths={['Explorar', 'Checkout']} links={['/explore', '']} />

      <Container>
        {productsInCart.map((product, key) =>
          <CartItem key={key}>
            <WrapperProduct>
              <WrapperImgProduct>
                <img
                  src={`data:image/png;base64,${product.imgBase64}`}
                  alt="Produto no carrinho"
                />
              </WrapperImgProduct>

              <ContentProduct>
                <h4>{product.name}</h4>
                <p>R$ {formatNumber(product.value)} </p>

                <ContainerIncAndDecQty>
                  <button
                    title="Remover uma unidade do produto"
                    onClick={_ => DecQtyProductInCart(product._id)}
                  > - </button>

                  {product.qty}

                  <button
                    title="adicionar uma unidade do produto"
                    onClick={_ => IncQtyProductInCart(product._id)}
                  > + </button>
                </ContainerIncAndDecQty>
              </ContentProduct>
            </WrapperProduct>

            <WrapperRemoveItem>
              <img
                title="Remover produto do carrinho"
                onClick={_ => removeProductCart(product._id)}
                src='/assets/images/icons/close-black.png'
                alt="Remover produto"
              />
            </WrapperRemoveItem>
          </CartItem>
        )}

        <ContainerBottom>
          <p>Total: <span>{allPrice}</span></p>
          <ButtonGlobal onClick={_ => setVisibleModalCheckout(true)}>
            <img
              src='/assets/images/icons/check.png'
              alt="Finalizar compra"
            />
            Finalizar compra
          </ButtonGlobal>
        </ContainerBottom>

        {visibleModalCheckout && <ModalCheckout
          visibleModalCheckout={visibleModalCheckout}
          setVisibleModalCheckout={setVisibleModalCheckout}
        />}
      </Container>
    </>
  );
};