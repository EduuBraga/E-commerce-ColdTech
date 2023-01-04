import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "../../Components/Nav";
import { LoadProducts } from "../../Components/loadProducts";
import { Footer } from "../../Components/Footer";

import HomeURLImg from '../../assets/images/icons/home.png';
import ArrowURLImg from '../../assets/images/icons/arrow-right.png';

import { Container, Breadcrumb } from "./styles";

export const PageCPUs = () => {
  return (
    <>
      <Nav />
      <Breadcrumb>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <Link to="/explorar">Explorar</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Computadores</p>
      </Breadcrumb>

      <Container>
        <LoadProducts product='computers'></LoadProducts>
      </Container>

      <Footer />
    </>
  );
};