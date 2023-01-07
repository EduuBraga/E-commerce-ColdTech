import React, { useContext, useState } from "react";
import { CartContext } from "../../Provider/ProductsCartProvider";

import { Header } from "../../Components/Header";
import { Breadchumb } from "../../Components/Breadchumb";
import { ButtonGlobal } from '../../Components/Button/styles';
import { ModalCheckout } from "../../Components/ModalCheckout";

import CloseURLImg from '../../assets/images/icons/close-black.png';
import checkURLImg from '../../assets/images/icons/check.png';

import {
  Container,
  CartItem,
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

      <Container>
        <Breadchumb
          paths={['Explorar', 'Checkout']}
          links={['/explore', '']}
        />

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
                <p>R$ {formatNumber(product.value)} </p>
                <div>
                  <button
                    title="Remover uma unidade do produto"
                    onClick={_ => DecQtyProductInCart(product._id)}
                  > - </button>

                  {product.qty}

                  <button
                    title="adicionar uma unidade do produto"
                    onClick={_ => IncQtyProductInCart(product._id)}
                  > + </button>
                </div>
              </div>
            </WrapperProduct>
            <WrapperRemoveItem>
              <img
                title="Remover produto do carrinho"
                onClick={_ => removeProductCart(product._id)}
                src={CloseURLImg} alt="Remover produto"
              />
            </WrapperRemoveItem>
          </CartItem>
        )}

        <ContainerBottom>
          <p>Total: <span>{allPrice}</span></p>
          <ButtonGlobal onClick={_ => setVisibleModalCheckout(true)}>
            <img src={checkURLImg} alt="Finalizar compra" />
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