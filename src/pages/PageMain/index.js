import React from 'react'
import { Container } from './styles'
import { Header } from '../../Components/Header/index'
import { Shop } from '../../Components/Shop/index'

export function PageMain() {
  return (
    <>
      <Header></Header>
      <Container>
        <Shop></Shop>
      </Container>
    </>
  )
}