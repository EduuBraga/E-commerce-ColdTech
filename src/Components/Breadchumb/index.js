import React from 'react';
import { Link } from "react-router-dom";

import { Container, ImgArrow, ImgHome } from './style';

export const Breadchumb = ({ paths, links }) => {
  return (
    <Container>
      <Link to="/">
        <ImgHome src='/assets/images/icons/home.png' alt="Voltar para a home" />
        <p>Home</p>
      </Link>

      {paths.map((path, index) =>
        <Link key={index} to={links[index]}>
          <ImgArrow
            key={path.toString()}
            src='/assets/images/icons/arrow-right.png'
            alt="Seta"
          />

          <p>{path}</p>
        </Link>
      )}
    </Container>
  );
};