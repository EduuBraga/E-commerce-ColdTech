import React, {  useState } from "react";
import { ButtonGlobalNoBG } from "../../Components/Button/styles"
import { Link } from "react-router-dom";

import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header/index.js"

import ImgChatURL from '../../assets/images/icons/chat.png'
import ImgCartShoppingURL from '../../assets/images/icons/cart-shopping.png'
import ImgToolURL from '../../assets/images/icons/tool.png'
import ImgSmartphoneURL from '../../assets/images/icons/smartphone.png'
import HomeURLImg from '../../assets/images/icons/home.png'
import ArrowURLImg from '../../assets/images/icons/arrow-right.png'

import { ContainerHelp, Tittle, ContainerContent, CardContent, WrapperButtons, Breadcrumb } from "./styles";

export function PageContact() {
  const [visibleHelp, setVisibleHeap] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 360){
      setVisibleHeap(true)
    } 
    else if (scrolled <= 360){
      setVisibleHeap(false)
    }
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      <Header />

      <Breadcrumb>
        <Link to="/"><img src={HomeURLImg} alt="Voltar para a home" /></Link>
        <Link to="/">Home</Link>
        <img src={ArrowURLImg} alt="Seta" />
        <p>Contato</p>
      </Breadcrumb>

      <Tittle>
        <h2>Fale conosco</h2>
      </Tittle>

      <ContainerHelp visibleContent={visibleHelp}>
        <a href="#ajuda">
          <div>
            Ajuda em Serviços da ColdTech
          </div>
        </a>
        <a href="#comprar">
          <div>
            Ajuda Para Fazer Uma Compra
          </div>
        </a>
      </ContainerHelp>

      <ContainerContent>

        <h2 id="ajuda">Ajuda nos Serviços da ColdTech</h2>
        <CardContent>
          <div>
            <div>
              <img src={ImgCartShoppingURL} alt="Carrinho de pedidos" />
            </div>
            <h3>Verifique Seus Pedidos</h3>
            <p>Visualize o status de seu pedido e suas notas fiscais</p>
            <ButtonGlobalNoBG >Suporte a pedidos</ButtonGlobalNoBG>
          </div>

          <div>
            <div>
              <img src={ImgToolURL} alt="Ferramenta de suporte técnico" />
            </div>
            <h3>Receba Suporte Técnico</h3>
            <p>Peça ajuda para os seus equipamentos</p>
            <ButtonGlobalNoBG >Contato com o Suporte Técnico</ButtonGlobalNoBG>
          </div>
        </CardContent>

        <h2 id='comprar'>Ajuda Para Fazer Uma Compra</h2>
        <CardContent>
          <div>
            <div>
              <img src={ImgChatURL} alt="Ferramenta de suporte técnico" />
            </div>
            <h3>Entre no Chat de Vendas</h3>
            <p>Peça ajuda para os seus equipamentos</p>
            <ButtonGlobalNoBG >Contato com o Suporte Técnico</ButtonGlobalNoBG>
          </div>
          <div>
            <div>
              <img src={ImgSmartphoneURL} alt="Ferramenta de suporte técnico" />
            </div>
            <h3>Nos Chame no Telefone</h3>
            <p>Fale diretamente conosco:</p>
            <WrapperButtons>
              <ButtonGlobalNoBG >WhatsApp</ButtonGlobalNoBG>
              <ButtonGlobalNoBG >Ligue para +55 85 99999 9999</ButtonGlobalNoBG>
            </WrapperButtons>
          </div>
        </CardContent>

      </ContainerContent>

      <Footer />
    </>
  )
}