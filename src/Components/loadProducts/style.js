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
  padding: 10px;
  width: 250px;
  gap: 15px;
  background-color: #f3f4f6;

  @media screen and (max-width: 1024px){
    width: 300px;
  }

  @media screen and (max-width: 768px){
    max-width: 350px;
  }
  @media screen and (max-width: 425px){
    max-width: 270px;
  }

  img{
    width: 180px;
    align-self: center;
    transition: all 0.5s ease;
    cursor: pointer;

    :hover{
      transform: scale(1.05);
    }
  }

  h4:first-child{
    text-align: center;
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

export const MiddleContent = styled.div`
  li{
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
  }
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