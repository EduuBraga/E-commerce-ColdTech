import React from "react";
import { Link } from "react-router-dom";

import {Container} from './styles'

export function Offers1({ msg, tittle, src }) {
  return (
    <Container>
      <div>
        <img src={src} alt="Notebook gamer" />
      </div>

      <div>
        <h2> {tittle}</h2>
        <p>{msg}</p>
        <Link to='/notebooks'>Confira agora</Link>
      </div>
    </Container>
  )
} 

export function Offers2({ msg, tittle, src }) {
  return (
    <Container>
      <div>
        <h2> {tittle}</h2>
        <p>{msg}</p>
        <Link to='/notebooks'>Confira agora</Link>
      </div>

      <div>
        <img src={src} alt="Computador" />
      </div>
    </Container>
  )
} 