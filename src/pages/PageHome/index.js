import React from 'react'

import notebookURL from '../../assets/images/NotebookGamerOffers.png'
import cpuURL from '../../assets/images/CPUOffers.png'
import AcessoriosURL from '../../assets/images/AcessoriosOffers.png'
import monitorURL from '../../assets/images/MonitorOffers.png'

import { Container, WrapperPage } from './styles'
import { Header } from '../../Components/Header/index'

import { SuporteCold } from '../../Components/SupportCold/index'
import { Offers1, Offers2, Offers3, Offers4 } from '../../Components/Offers/index'
import { Footer } from '../../Components/Footer/index'

export function PageHome() {
  return (
    <WrapperPage>
      <Header/>
      
      <Container>
        <Offers1
          tittle='Notebooks de alta qualidade'
          subTittle='Notebooks'
          msg='Os melhores notebooks do mercado com ofertas exclusivas'
          src={notebookURL}
        />
        <Offers2
          tittle='Essencial para Pro PLayers'
          subTittle='CPU para gamers'
          msg='Alcance todo o seu potencial com essa máquina feita para você ganhar todas'
          src={cpuURL}
        />

        <SuporteCold />

        <Offers3
          tittle="Dê um upgrade no seu espaço"
          subTittle='Acessórios'
          msg="Deixe seu setup mais bonito e aumente sua produtividade com acessórios incríveis"
          src={AcessoriosURL}
        />
        <Offers4
          tittle='Os melhores dos mercado'
          subTittle='Monitores'
          msg='Aprecie cores vibrantes e detalhes impressionantes com monitores feitos para você'
          src={monitorURL}
        />
      </Container>
      <Footer />
    </WrapperPage>
  )
}