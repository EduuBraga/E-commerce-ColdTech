import React, { useContext } from "react";
import { CartContext } from "../../Provider/ProductsCartProvider";
import { Link } from "react-router-dom";

import { ProductsCart } from "../ProductsCart";
import { ButtonGlobal } from "../../Components/Button/styles";

import { 
  Container, 
  ContainerTop, 
  ContainerNoItem, 
  ImgClose, 
  ContainerTotal, 
  ButtonNoItem,
  ContainerButton 
} from "./styles";

export function ModalCart({ setVisibleModal, visibleModal }) {
  const { productsInCart, allPrice } = useContext(CartContext);

  return (
    <Container modalItIsVisible={visibleModal}>
      <ContainerTop>
        <ImgClose
          onClick={_ => setVisibleModal(false)}
          src='/assets/images/icons/close.png' alt="Fechar carrinho"
        />
        <div>
          <img src='/assets/images/icons/cart-white.png' alt='Carrinho' />
          <h2>  Carrinho</h2>
        </div>
      </ContainerTop>

      {productsInCart.length ? (
        <ProductsCart />
      ) : (
        <ContainerNoItem>
          <h3>Não a item no carrinho</h3>
          <p>
            Dê uma olhada nos nossos produtos<br />
            clicando no botão abaixo
          </p>
          <Link to='/explore'>
            <ButtonGlobal>Clique Aqui</ButtonGlobal>
          </Link>
        </ContainerNoItem>
      )}

      <ContainerButton>
        {productsInCart.length ? (
          <>
            <ContainerTotal>
              <span>Total: {allPrice}</span>
            </ContainerTotal>
            <Link to="/checkout">
              <ButtonGlobal>
                <img src='/assets/images/icons/cart-white.png' alt="Carrinho" />
                Ir para o Checkuot
              </ButtonGlobal>
            </Link>
          </>
        ) : (
          <ButtonNoItem>
            <img src='/assets/images/icons/cart-white.png' alt="Carrinho" />
            Ir para o Checkout
          </ButtonNoItem>
        )}
      </ContainerButton>
    </Container>
  );
};