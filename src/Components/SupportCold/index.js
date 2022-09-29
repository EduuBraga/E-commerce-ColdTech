import React from "react"
import { Link } from "react-router-dom"

import telefoneImgUrl from '../../assets/images/icons/telephone.png'
import contatoImgUrl from '../../assets/images/icons/contato.png'
import garantiaImgUrl from '../../assets/images/icons/garantia.png'

import { Container, Suportes, Tittle } from './styles'

export function SuporteCold() {
  return (
    <Container>
      <Tittle>
        <h2>Suporte Cold</h2>
        <p>Receba ajuda em relação ao seu produto</p>
      </Tittle>

      <div>
        <Suportes>
          <Link to="/contact">
            <div>
              <img src={garantiaImgUrl} alt="Garantia" />
            </div>
            <div>
              <h3>Garantia</h3>
              <p>Verifique a garantia do seu produto</p>
            </div>
          </Link>
        </Suportes>

        <Suportes>
          <Link to="/contact">
            <div>
              <img src={contatoImgUrl} alt="Contato" />
            </div>
            <div>
              <h3>Entre em contato</h3>
              <p>Converse com o time de suporte técnico</p>
            </div>
          </Link>
        </Suportes>

        <Suportes>
          <Link to='/contact'>
            <div>
              <img src={telefoneImgUrl} alt="Telefone" />
            </div>
            <div>
              <h3>Suporte a pedidos</h3>
              <p>Verifique o estado do seu pedido com o suporte</p>
            </div>
          </Link>
        </Suportes>
      </div>
    </Container>
  )
}