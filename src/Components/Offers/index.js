import React from "react";
import { Link } from "react-router-dom";

import {Container} from './styles'

export function Offers1({subTittle, msg, tittle, src }) {
  return (
    <Container>
      <div>
        <img src={src} alt="Notebook gamer" />
      </div>

      <div>
        <p>{subTittle}</p>
        <h2> {tittle}</h2>
        <p>{msg}</p>
        <Link to='/notebooks'>Confira agora</Link>
      </div>
    </Container>
  )
} 

export function Offers2({subTittle, msg, tittle, src }) {
  return (
    <Container>
      <div>
        <p>{subTittle}</p>
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

export function Offers3({subTittle, msg, tittle, src }) {
  return (
    <Container>
      <div>
        <p>{subTittle}</p>
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