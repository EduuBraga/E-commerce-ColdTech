import React from 'react';
import { useParams } from 'react-router-dom';

import { LoadProducts } from "../../Components/loadProducts";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";

import { Container } from './style.js';

export const PageProducts = () => {
  const { title } = useParams();

  return (
    <>
      <Nav />

      <Container>
        <LoadProducts product={title}></LoadProducts>
      </Container>

      <Footer />
    </>
  );
};