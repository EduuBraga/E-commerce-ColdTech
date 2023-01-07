import React from 'react';
import { useParams } from 'react-router-dom';

import { Header } from "../../Components/Header";
import { Breadchumb } from "../../Components/Breadchumb";
import { LoadProducts } from "../../Components/loadProducts";
import { Footer } from "../../Components/Footer";

import { Container } from './style.js';

export const PageProducts = () => {
  const { title } = useParams();

  return (
    <>
      <Header />
      <Breadchumb paths={['Explorar', title]} links={['/explore', '']} />

      <Container>
        <LoadProducts product={title}></LoadProducts>
      </Container>

      <Footer />
    </>
  );
};