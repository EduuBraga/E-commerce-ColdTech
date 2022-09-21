import React from 'react'

import notebook from '../../assets/images/notebookGame.png'
import pcGamer from '../../assets/images/pcGamer.png'

import { Container } from './styles'
import { Header } from '../../Components/Header/index'
import { Shop } from '../../Components/Shop/index'
import { SuporteCold } from '../../Components/SupportCold/index'
import { Offers1, Offers2 } from '../../Components/Offers/index'

export function PageMain() {
  return (
    <>
      <Header></Header>
      <Container>
        <Shop></Shop>
        <Offers1 tittle='Notebooks de alta qualidade' msg='Os melhores notebooks do mercado com ofertas exclusivas' src={notebook}></Offers1>
        <SuporteCold></SuporteCold>
        <Offers2 tittle="Setup gamer completo" msg="Setups gamer escolhido a dedo perfeito para você jogar qualquer gamer" src={pcGamer} ></Offers2>
      </Container>
    </>
  )
}