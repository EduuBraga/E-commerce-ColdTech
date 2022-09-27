import styled from 'styled-components'

import NotebookImgURL from '../../assets/images/PageNotebook/Notebook1.png'
import CPUImgURL from '../../assets/images/PageCPU/CPU2.png'
import MonitorImgURL from '../../assets/images/PageMonitores/Monitor1.png'
import AcessoriosImgURL from '../../assets/images/PageAccessories/keyboard-gamer.png'


export const Container = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-areas:"acessory notebook notebook monitor"
                      "acessory cpu cpu monitor";
  gap: 20px;
  
  h2{
    z-index: 5;
  }

  a{
    color: white;
    text-decoration: none;
    transition: all 0.2s;

    &:active, &:focus{
      color: black;
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

export const Breadcrumb = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  padding: 20px 10px;
  
  img:nth-child(1){
    width: 25px;
    margin-right: 5px;
    transform: translateY(-2px);
  }

  img{
    width: 15px;
  }

  a{
    color:black;
    text-decoration: none;

    :active, :focus{
      text-decoration: none;
      color: black;
    }

    :hover{
      text-decoration: underline;
    }
  }
  p{
    cursor: default;
  }
`

export const ContainerNotebook = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 200px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

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
  height: 200px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

  /* :hover{
    border-bottom: 15px solid var(--color-tertiary);
  } */

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
  height: 420px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

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
  height: 420px;
  background-color: #262626;
  border-bottom: 15px solid var(--color-secondary);
  border-radius: 10px;

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