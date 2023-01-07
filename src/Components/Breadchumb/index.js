import React from 'react';
import { Link } from "react-router-dom";

import ArrowURLImg from '../../assets/images/icons/arrow-right.png';
import HomeURLImg from '../../assets/images/icons/home.png';

import { Container } from './style';

export const Breadchumb = ({ paths, links }) => {
  return (
    <Container>
      <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
      <Link to="/">Home</Link>

      {paths.map((path, index) =>
        <>
          <img key={index} src={ArrowURLImg} alt="Seta" />
          <Link key={index} to={links[index]} >{path}</Link>
        </>
      )}
    </Container>
  );
};