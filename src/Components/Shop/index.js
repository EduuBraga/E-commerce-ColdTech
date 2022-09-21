import React from "react";

import { Container } from './styles'

import Compute from '../../assets/images/Compute.png'
import Notebook from '../../assets/images/notebook.png'
import Accessories from '../../assets/images/keyboard-mouse.png'
import Screen from '../../assets/images/screen.png'

export function Shop() {
  return (
    <Container>
      <div>
        <img src={Notebook} alt="" />
        <h3>Notebooks</h3>
      </div>

      <div>
        <img src={Compute} alt="" />
        <h3>Computadores</h3>
      </div>

      <div>
        <img src={Screen} alt="" />
        <h3>Monitores</h3>
      </div>

      <div>
        <img src={Accessories} alt="" />
        <h3>Acessórios</h3>
      </div>
    </Container>
  )
}