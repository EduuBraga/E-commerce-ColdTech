import React from "react";
import { Container, Suportes, Tittle } from './styles'

import telefone from '../../assets/images/icons/telephone.png'
import contato from '../../assets/images/icons/contato.png'
import garantia from '../../assets/images/icons/garantia.png'

export function SuporteCold() {
  return (
    <Container>
      <Tittle>
        <h2>Suporte Cold</h2>
        <p>Receba ajuda em relação ao seu produto</p>
      </Tittle>

      <div>
        <Suportes>
          <div>
            <img src={garantia} alt="" />
          </div>
          <div>
            <h3>Garantia</h3>
            <p>Verifique a garantia do seu produto</p>
          </div>
        </Suportes>

        <Suportes>
          <div>
            <img src={contato} alt="" />
          </div>
          <div>
            <h3>Entre em contato</h3>
            <p>Converse com o time de suporte técnico</p>
          </div>
        </Suportes>

        <Suportes>
          <div>
            <img src={telefone} alt="" />
          </div>
          <div>
            <h3>Suporte a pedidos</h3>
            <p>Verifique o estado do seu pedido com o suporte</p>
          </div>
        </Suportes>
      </div>
    </Container>
  )
}