import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { CartContext } from "../../Provider/ProductsCartProvider";

import cartURLImg from '../../assets/images/icons/cart-white.png';

import { ButtonGlobal } from '../../Components/Button/styles';

import {
  CardProduct,
  MiddleContent,
  ContainerLoader,
  Loader,
  Title,
  ImgProduct,
  LinkMoreSpecs
} from './style.js';

export const LoadProducts = ({ product: type }) => {
  const [products, setProducts] = useState([]);
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  const { addProductCart, formatNumber } = useContext(CartContext);

  const getProduct = async () => {
    const URL_PRODUCT = `https://api-coldtech.up.railway.app/${type}`;

    const dataProducts = await axios.get(URL_PRODUCT)
      .then(res => res.data);

    setLoaderIsVisible(false);
    setProducts([...dataProducts]);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {products.map(product =>
        <CardProduct key={product._id}>
          <Title>{product.name}</Title>
          <ImgProduct
            src={`data:image/png;base64,${product.imgBase64}`}
            alt={product.name}
          />
          <h4>{product.description.msg}</h4>
          <p>A partir de {formatNumber(product.value)}</p>

          <MiddleContent key={product._id}>
            <li>{product.description.note1}</li>
            <li>{product.description.note2}</li>
            <li>{product.description.note3}</li>
            {product.description.note4 && <li>{product.description.note4}</li>}
          </MiddleContent>

          <LinkMoreSpecs>Mais especificações</LinkMoreSpecs>

          <ButtonGlobal onClick={_ => addProductCart(product._id, type)}>
            <img src={cartURLImg} alt="Carrinho" />
            Pôr no Carrinho
          </ButtonGlobal>
        </CardProduct>
      )}

      {loaderIsVisible && (
        <>
          <div />
          <ContainerLoader>
            <Loader />
          </ContainerLoader>
        </>
      )}
    </>
  );
};