import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cartURLImg from '../../assets/images/icons/cart-white.png';

import { ButtonGlobal } from '../../Components/Button/styles';
import { CardProduct, MiddleContent } from './style.js';

export const LoadProducts = ({ product }) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const URL_PRODUCT = `https://api-coldtech.up.railway.app/${product}`;

    const dataProducts = await axios.get(URL_PRODUCT)
      .then(res => res.data);

    console.log(dataProducts)
    setProducts([...dataProducts]);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {products.map(product =>
        <CardProduct key={product._id}>
          <h4>{product.name}</h4>
          <img src={`data:image/png;base64,${product.imgBase64}`} alt="HeadSet" />
          <h4>{product.description.msg}</h4>
          <p>A partir de R$ {product.value}</p>
          {/* <p>A partir de R$ {brokenNumber(product.value)}</p> */}

          <MiddleContent key={product._id}>
            <li>{product.description.note1}</li>
            <li>{product.description.note2}</li>
            <li>{product.description.note3}</li>
          </MiddleContent>

          {/* <ButtonGlobal onClick={_ => AddProductCart(product._id)}> */}
          <ButtonGlobal>
            <img src={cartURLImg} alt="Carrinho" />
            Pôr no Carrinho
          </ButtonGlobal>
        </CardProduct>
      )}
    </>
  )
}