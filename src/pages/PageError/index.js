import React from 'react'

import { Link } from 'react-router-dom'

import { ButtonGlobal } from '../../Components/Button/styles'
import { Container } from './styles'

export function PageError() {
  return (
    <Container>
      <div>
        <p>Página não encontrada </p>
        <p>Clique no botão para voltar a página principal</p>
        <Link to='/'>
          <ButtonGlobal>Voltar</ButtonGlobal>
        </Link>
      </div>
    </Container>
  )
}