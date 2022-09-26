import styled, { keyframes } from "styled-components"

const Scale = keyframes`
  0%{
    /* transform: translateX(100px); */
    width: 0px;
    height: 0vh;
  }100%{
    /* transform: translateX(0px); */
    width: 400px;
    height: 100vh;
  }
`

export const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
   width: 400px;
  height: 100vh; 
  background-color: #262626;
  z-index: 100;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  animation: ${Scale} 0.5s ease-in;

  *{
    color: white;
  }
`

export const ContainerClose = styled.div`
  text-align: end;
  padding: 5px;

  img{
    cursor: pointer;
    width: 22px;
  }
`


export const ProductsCart = styled.div`

`

export const WrapperButton = styled.div`
  position: absolute;
  bottom :10px;
  transform: translateX(50%);
  display: flex;
  justify-content: center;

  button{
    display: flex;
    align-items: center;
    background-color: white;
    color: black;

    img{
      width: 25px;
    }
  }
`