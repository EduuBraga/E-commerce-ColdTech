import styled from 'styled-components'

import NotebookImgURL from '../../assets/images/PageNotebook/Notebook1.png'
import CPUImgURL from '../../assets/images/PageCPU/CPU2.png'
import MonitorImgURL from '../../assets/images/PageMonitores/Monitor1.png'
import AcessoriosImgURL from '../../assets/images/PageAccessories/keyboard-gamer.png'

export const WrapperPage = styled.section`
  position: relative;
  height: 100vh;

  footer{
    @media screen and (min-height: 840px){
      bottom: -600px;
    }
    @media screen and (min-height: 1024px){
      bottom: -100px;
    }
  }
`


export const Container = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding-left: 10px;
  padding-right: 10px;

  display: grid;
  gap: 20px;
  place-content: center;
  grid-template-areas:
  "acessory notebook notebook monitor"
  "acessory cpu cpu monitor";

  @media screen and (max-width: 1040px){
    grid-template-areas:"cpu notebook "
    "cpu notebook "
    "acessory monitor"
    "acessory monitor";
  }
  @media screen and (max-width: 765px){
    gap: 10px;
    place-items: center;
    grid-template-areas:"notebook notebook "
    "cpu cpu "
    "monitor monitor"
    "acessory acessory";
  }
  
  h2{
    z-index: 5;
    @media screen and (max-width: 768px){
      font-size: 20px;
    }
  }

  a{
    color: white;
    text-decoration: none;
    transition: all 0.2s;

    &:active, &:focus{
      color: white;
    }
    &:hover{
      color: var(--color-tertiary);
    }
    &:hover h2{
      transform: scale(1.1);
    }
  }
  a:nth-child(1){
    grid-area: notebook ; 
  }
  a:nth-child(2){
    grid-area: cpu; 
  }
  a:nth-child(3){
    grid-area: acessory; 
  }
  a:nth-child(4){
    grid-area: monitor; 
  }
`

export const ContainerNotebook = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;

  width: 36rem;
  height: 200px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;
  

  @media screen and (max-width: 1040px){
    width: 22rem;
    height: 200px;
  }
  @media screen and (max-width: 765px){
    width: 29rem;
  }
  @media screen and (max-width: 490px){
    width: 19rem;
  }

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    z-index: 1;
    opacity: 0.7;
    background-image: url(${NotebookImgURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`

export const ContainerCPU = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;

  width: 36rem;
  height: 200px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

  @media screen and (max-width: 1040px){
    width: 22rem;
    height: 200px;
  }
  @media screen and (max-width: 765px){
    width: 29rem;
  }
  @media screen and (max-width: 490px){
    width: 19rem;
  }

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.7;
    background-image: url(${CPUImgURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`

export const ContainerAcessorios = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;

  width: 12rem;
  height: 420px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

  @media screen and (max-width: 1040px){
    width: 22rem;
    height: 200px;
  }
  @media screen and (max-width: 765px){
    width: 29rem;
  }
  @media screen and (max-width: 490px){
    width: 19rem;
  }

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.7;
    background-image: url(${AcessoriosImgURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`

export const ContainerMonitores = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;

  
  width: 12rem;
  height: 420px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

  @media screen and (max-width: 1040px){
    width: 22rem;
    height: 200px;
  }
  @media screen and (max-width: 765px){
    width: 29rem;
  }
  @media screen and (max-width: 490px){
    width: 19rem;
  }

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.7;
    background-image: url(${MonitorImgURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 10px;
  }
`