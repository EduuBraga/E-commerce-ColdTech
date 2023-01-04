import React from "react";
import { Link } from "react-router-dom";

import { LoadProducts } from "../../Components/loadProducts";
import { Footer } from "../../Components/Footer";
import { Nav } from "../../Components/Nav";

import HomeURLImg from '../../assets/images/icons/home.png';
import ArrowURLImg from '../../assets/images/icons/arrow-right.png';

import { Container, Breadcrumb } from "./styles";

export const PageMonitores = () => {
  return (
    <>
      <Nav />

      <Breadcrumb>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <Link to="/explorar">Explorar</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Monitores</p>
      </Breadcrumb>

      <Container>
        <LoadProducts product='monitors'></LoadProducts>
      </Container>

      <Footer />
    </>
  );
};