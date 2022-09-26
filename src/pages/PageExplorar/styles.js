import styled,{keyframes} from 'styled-components'

import NotebookImg from '../../assets/images/BG/NotebookShopBG.png'
import CPUImg from '../../assets/images/BG/CPUShopBG.png'
import MonitorImg from '../../assets/images/BG/MonitoresShopBG.png'
import AcessoriosImg from '../../assets/images/BG/AcessoriosShopBG.png'

export const Container = styled.section`
  margin: 0 auto;
  padding-top: 50px;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      color: var(--color-secondary);
    }
  }
`

export const ContainerNotebook = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  width:200px;
  height: 200px;

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(${NotebookImg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
`

export const ContainerCPU = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  width:200px;
  height: 200px;

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(${CPUImg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
`

export const ContainerAcessorios = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  width:200px;
  height: 200px;

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(${AcessoriosImg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
`

export const ContainerMonitores = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  width:200px;
  height: 200px;

  ::before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(${MonitorImg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
`