import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Provider/ProductsCartProvider";
import { Link } from "react-router-dom";

import { Data } from "../../Services/Data";

import { Nav } from "../../Components/Nav";
import { ButtonGlobal } from "../../Components/Button/styles";
import { Footer } from "../../Components/Footer";

import HomeURLImg from '../../assets/images/icons/home.png';
import cartURLImg from '../../assets/images/icons/cart-white.png';
import ArrowURLImg from '../../assets/images/icons/arrow-right.png';

import { Breadcrumb, Container, CardAccessories } from "./styles";

export function PageAccessories() {
  const { AddProductCart, brokenNumber, getProduct } = useContext(CartContext)
  const [accessories, setAccessories] = useState([])
  const acessories = Data.filter(product => product.tittle === 'acessorios');

  useEffect(() => {
    const getAccessories = async () => {
      const ProductsAccessories = await getProduct('accessories')
      setAccessories([ProductsAccessories])
    }

    getAccessories()
  }, [])

  useEffect(() => {
    console.log(accessories)
  }, [accessories])

  return (
    <>
      <Nav />
      <Breadcrumb>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <Link to="/explorar">Explorar</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Acessórios</p>
      </Breadcrumb>
      <Container>
        {accessories.length > 1 ? (accessories.map(accessory =>
          <h1 key={accessory.key}>{accessory.description.message}</h1>
        )) : (
          <h1>Olá pessoas</h1>
        )}

      </Container>

      <Footer />
    </>
  )
}