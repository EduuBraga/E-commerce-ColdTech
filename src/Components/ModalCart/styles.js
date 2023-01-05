import styled, { keyframes } from "styled-components"

const AnimationBlur = keyframes`
  0%{
    opacity: 0.1;
  }100%{
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border:1.5px solid #404040;
  text-align: center;
  position: fixed;
  top: 0;
  right: ${({ modalItIsVisible }) => modalItIsVisible === true ? "0" : "-450px"};
  transition: all 0.5s ease;
  width: 440px;
  height: 100vh; 
  background-color: #262626;
  z-index: 100;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;

  @media screen and (max-width: 490px){
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border: none;
    right: ${({ modalItIsVisible }) => modalItIsVisible === true ? "0" : "-450px"};
    width: 100vw;
  }
`

export const ContainerTop = styled.div`
  text-align: center;
  padding: 20px 0px 0px 0px;

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

  &:active{
    transform:scale(0.90);
  }
`

export const ContainerNoItem = styled.div`
  *{
    margin-bottom: 8px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: column;

  padding: 16px;
  background-color: #262626;

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

    @media screen and (max-width: 490px){
      width: 95vw;
    }
    
    img{
      width: 25px;
    }
  }
`

export const ContainerTotal = styled.div`
  animation: ${AnimationBlur} 1s ease;
  background-color: #262626;
  text-align: left;
  font-weight: 500;
  align-self: flex-start;
  font-size: 16px;
`

export const ButtonNoItem = styled.button`
  cursor: not-allowed;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s;

  &:hover{
    background-color: rgba(255, 0,0, 255);
  }
`