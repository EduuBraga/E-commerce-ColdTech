import styled from 'styled-components'

export const Container = styled.section`
  background-color: white;
  position: sticky;
  top: -2px;
  z-index: 10;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  overflow-x: auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 768px){
    gap: 10px;
  }

  @media screen and (max-width: 490px){
    gap: 5px;
    justify-content: flex-start;
  }
  
  img{
    width: 35px;
    margin-bottom: 2px;
    @media screen and (max-width: 768px){
      width: 28px;
    }
    @media screen and (max-width: 490px){
      width: 25px;
    }
  }

  a{
    color: black;
    text-decoration: none;

    &:active, &:focus{
      color: black;
    }
    &:hover{
      color: var(--color-secondary);
    }
  }
`

export const Product = styled.div`
  text-align:center;
  padding:15px 10px ;
  cursor: pointer;
  transition: all 0.2s;


  h3{
    font-weight: 400;

    @media screen and (max-width: 768px){
      font-size: 15px;
    }
    @media screen and (max-width: 490px){
      font-size: 14px;
    }
  }

  &:hover{
      background-color: #f1f1f1;
  }
`