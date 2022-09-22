import styled from 'styled-components'

export const Container = styled.section`
  background-color: white;
  position: sticky;
  top: -2px;
  z-index: 10;
`

export const Products = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  overflow: auto;
  border-top: 2px solid #ccc;
  border-bottom: 1px solid #ccc;
  
  img{
    width: 35px;
    margin-bottom: 5px;
    @media screen and (max-width: 1024px){
      width: 35px;
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
  }

  &:hover{
      background-color: #f1f1f1;
  }
`





