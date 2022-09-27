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
`

export const ContainerTop = styled.div`
  position: relative;
  text-align: center;
  padding: 15px 0px 15px 0px;

  div{
    display: flex;
    gap: 7px;
    justify-content: center;

    img{
      width: 38px;
      transform: translateY(-6px);
    }
  }
`

export const ImgClose = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  width: 18px;
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
  background-color: #262626;
  position: absolute;
  bottom:10px;
  transform: translateX(5%);
  display: flex;
  justify-content: center;

  a{
    text-decoration: none;
    &:hover, &:active, &:focus{
      color: white;
    }
  }
  button{
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    img{
      width: 25px;
    }
  }
`