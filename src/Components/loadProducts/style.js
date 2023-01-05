import styled, { keyframes } from "styled-components";

const isRotating = keyframes`
  to{
    transform: rotate(1turn);
  }
`

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 24px 20px;
  width: 300px;
  gap: 12px;
  background-color: #f2f2f2;

  @media screen and (max-width: 1024px){
    width: 300px;
  }

  @media screen and (max-width: 768px){
    max-width: 350px;
  }
  @media screen and (max-width: 425px){
    max-width: 270px;
  }

  button{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    
    img{
      width: 28px;
    }
  }
`

export const Title = styled.h3`
  text-align: center;
  font-size: 18px;
`

export const ImgProduct = styled.img`
  width: 180px;
  align-self: center;
  transition: all 0.3s ease;
  cursor: pointer;
  filter: drop-shadow(3px 8px 6px #202020);
  padding: 8px 4px;

  :hover{
    transform: scale(1.03);
  }
`

export const MiddleContent = styled.div`
  li{
    padding-bottom: 8px;
    font-size: 14px;
  }
`

export const LinkMoreSpecs = styled.a`
  color: #1363DF;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`

export const ContainerLoader = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  margin-top: 50px;
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top-color: #242424;
  border-radius: 50%;
  animation: ${isRotating} 1s infinite;
`