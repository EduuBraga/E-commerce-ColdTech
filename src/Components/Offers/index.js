import React from "react";
import { Link } from "react-router-dom";

import {Container, ContainerReverse} from './styles'

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
        <Link to='/explore/notebooks'>Confira agora</Link>
      </div>
    </Container>
  )
} 

export function Offers2({subTittle, msg, tittle, src }) {
  return (
    <ContainerReverse>
      <div>
        <p>{subTittle}</p>
        <h2> {tittle}</h2>
        <p>{msg}</p>
        <Link to='/explore/computers'>Confira agora</Link>
      </div>

      <div>
        <img src={src} alt="CPU" />
      </div>
    </ContainerReverse>
  )
} 

export function Offers3({subTittle, msg, tittle, src }) {
  return (
    <ContainerReverse>
      <div>
        <p>{subTittle}</p>
        <h2> {tittle}</h2>
        <p>{msg}</p>
        <Link to='/explore/accessories'>Confira agora</Link>
      </div>

      <div>
        <img src={src} alt="Acéssorios" />
      </div>
    </ContainerReverse>
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
        <Link to='/explore/monitors'>Confira agora</Link>
      </div>
    </Container>
  )
} 