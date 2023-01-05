import React from 'react';
import { Link } from "react-router-dom";

import notebookURL from '../../assets/images/NotebookGamerOffers.png';
import cpuURL from '../../assets/images/CPUOffers.png';
import AcessoriosURL from '../../assets/images/AcessoriosOffers.png';
import monitorURL from '../../assets/images/MonitorOffers.png';
import pcGamer from '../../assets/images/pc-gamer.png';

import { ButtonGlobal } from "../../Components/Button/styles";

import { Header } from '../../Components/Header';
import { ExploreNavBar } from '../../Components/ExploreNavBar';

import { SuporteCold } from '../../Components/SupportCold/index';
import { Footer } from '../../Components/Footer/index';

import {
  Container, 
  WrapperPage, 
  SectionOne, 
  Description,
  Section, 
  SectionReverse
} from './styles';

export function PageHome() {
  return (
    <WrapperPage>
      <Header />
      <ExploreNavBar />

      <Container>
        <SectionOne>
          <Description>
            <strong>Ofertas todos os dias</strong>
            <h1>Os melhores produtos do mundo tech é aqui!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              nam fugit quod ex nostrum velit?
            </p>
            <Link to='/explore' ><ButtonGlobal>Veja Mais</ButtonGlobal></Link>
          </Description>

          <div>
            <img src={pcGamer} alt="PC gamer e acessórios" />
          </div>
        </SectionOne>

        <Section>
          <div>
            <img src={notebookURL} alt="Notebook gamer" />
          </div>

          <div>
            <p>Notebooks</p>
            <h2> Notebooks de alta qualidade</h2>
            <p>Os melhores notebooks do mercado com ofertas exclusivas</p>
            <Link to='/explore/notebooks'>Confira agora</Link>
          </div>
        </Section>

        <SectionReverse>
          <div>
            <p>CPU para gamers</p>
            <h2>Essencial para Pro PLayers</h2>
            <p>
              Alcance todo o seu potencial com essa máquina feita para você
              ganhar todas
            </p>
            <Link to='/explore/computers'>Confira agora</Link>
          </div>

          <div>
            <img src={cpuURL} alt="CPU" />
          </div>
        </SectionReverse>

        <SuporteCold />

        <SectionReverse>
          <div>
            <p>Acessórios</p>
            <h2> Dê um upgrade no seu espaço</h2>
            <p>
              Deixe seu setup mais bonito e aumente sua produtividade com
              acessórios incríveis
            </p>
            <Link to='/explore/accessories'>Confira agora</Link>
          </div>

          <div>
            <img src={AcessoriosURL} alt="Acéssorios" />
          </div>
        </SectionReverse>

        <Section>
          <div>
            <img src={monitorURL} alt="Monitor" />
          </div>

          <div>
            <p>Monitores</p>
            <h2>Os melhores dos mercado</h2>
            <p>
              Aprecie cores vibrantes e detalhes impressionantes com monitores
              feitos para você
            </p>
            <Link to='/explore/monitors'>Confira agora</Link>
          </div>
        </Section>
      </Container>

      <Footer />
    </WrapperPage>
  );
};