import React from 'react';
import { Link } from "react-router-dom";

import ArrowURLImg from '../../assets/images/icons/arrow-right.png';
import HomeURLImg from '../../assets/images/icons/home.png';

import { Container, ImgArrow, ImgHome } from './style';

export const Breadchumb = ({ paths, links }) => {
  return (
    <Container>
      <Link>
        <ImgHome src={HomeURLImg} alt="Voltar para a home" />
        <p>Home</p>
    </Link>

      {paths.map((path, index) =>
        <Link key={index} to={links[index]}>
          <ImgArrow key={path.toString()} src={ArrowURLImg} alt="Seta" />
          <p>{path}</p>
        </Link>
      )}
    </Container>
  );
};