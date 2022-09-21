import styled from 'styled-components'

export const Container = styled.section`
  background-color: white;
  position: sticky;
  top: -1px;
  z-index: 10;
`

export const Products = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  overflow: auto;
  border-bottom: 2px solid #ccc;
  border-top: 1px solid #ccc;

  
  img{
    width: 48px;
    margin-bottom: 5px;
    @media screen and (max-width: 1024px){
      width: 35px;
    }
  }
`

export const Product = styled.div`
  text-align:center;
  padding:15px 10px ;
  cursor: pointer;
  transition: all 0.2s;

  h3{
    font-weight: 500;
  }

  :hover{
    background-color: #ddd;
    color: var(--color-secondary);
  }
`





