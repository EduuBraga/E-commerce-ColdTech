import React from 'react'

import notebook from '../../assets/images/notebookGame.png'
import pcGamer from '../../assets/images/pcGamer.png'
import cbu from '../../assets/images/pc.png'

import { Container } from './styles'
import { Header } from '../../Components/Header/index'
import { Shop } from '../../Components/Shop/index'
import { SuporteCold } from '../../Components/SupportCold/index'
import { Offers1, Offers2, Offers3 } from '../../Components/Offers/index'
import { Footer } from '../../Components/Footer/index'

export function PageMain() {
  return (
    <>
      <Header></Header>
      <Shop></Shop>
      <Container>  
        <Offers1 tittle='Notebooks de alta qualidade' subTittle='Notebooks' msg='Os melhores notebooks do mercado com ofertas exclusivas' src={notebook}></Offers1>
        <Offers2 tittle='Essencial para Pro PLayers' subTittle='CBU para gamers' msg='Alcance todo o seu potencial com essa máquina feita para você ganhar todas' src={cbu}></Offers2>
        <SuporteCold></SuporteCold>
        <Offers3 tittle="Dê um upgrade no seu espaço" subTittle='Acessórios' msg="Deixe seu setup mais bonito e aumente sua produtividade com acessórios incríveis" src={pcGamer} ></Offers3>
        <Footer></Footer>
      </Container>
    </>
  )
}