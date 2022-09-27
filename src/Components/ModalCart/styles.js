import styled, { keyframes } from "styled-components"

const Scale = keyframes`
  0%{
    width: 0px;
    height: 0vh;
  }100%{
    width: 400px;
    height: 100vh;
  }
`

export const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 440px;
  height: 100vh; 
  background-color: #262626;
  z-index: 100;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  animation: ${Scale} 0.5s ease-in;

  *{
    color: white;
  }
  h2{
    margin-bottom: 25px;

    img{
      width: 40px;
      margin-right: 5px;
      transform: translateY(10px);
    }
  }
`

export const ContainerClose = styled.div`
  text-align: end;
  padding: 10px;

  img{
    cursor: pointer;
    width: 22px;
  }
`

export const ContainerNoItem = styled.div`
  margin-top: 28vh;

  h3{
    margin-bottom: 8px;
  }
  p{
    margin-bottom: 8px;
  }
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
    gap: 10px;
    
    img{
      width: 25px;
    }
  }
`