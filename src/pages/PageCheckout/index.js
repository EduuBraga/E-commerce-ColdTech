import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Provider/ProductsCartProvider";
import { Link, useNavigate } from "react-router-dom";

import CloseURLImg from '../../assets/images/icons/close-black.png';
import ArrowURLImg from '../../assets/images/icons/arrow-right.png';
import HomeURLImg from '../../assets/images/icons/home.png';
import checkURLImg from '../../assets/images/icons/check.png';
import { ButtonGlobal } from '../../Components/Button/styles';
import { ModalCheckout } from "../../Components/ModalCheckout";
import { Nav as NavBar } from "../../Components/Nav";

import {
  Breadchumb,
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
  const navigate = useNavigate();

  useEffect(() => {
    if (productsInCart.length === 0) {
      navigate('/explorar');
    }
  });

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