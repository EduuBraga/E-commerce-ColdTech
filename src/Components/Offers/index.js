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
        <Link to='/shop/notebooks'>Confira agora</Link>
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
        <Link to='/shop/cpus'>Confira agora</Link>
      </div>

      <div>
        <img src={src} alt="CPU" />
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
        <Link to='/shop/accessories'>Confira agora</Link>
      </div>

      <div>
        <img src={src} alt="Acéssorios" />
      </div>
    </Container>
  )
} 

export function Offers4({subTittle, msg, tittle, src }) {
  return (
    <Container>
      <div>
        <img src={src} alt="Monitor" />
      </div>

      <div>
        <p>{subTittle}</p>
        <h2> {tittle}</h2>
        <p>{msg}</p>
        <Link to='/shop/monitores'>Confira agora</Link>
      </div>
    </Container>
  )
} 