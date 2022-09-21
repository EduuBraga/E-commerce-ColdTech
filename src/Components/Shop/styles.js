import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
  z-index: 200;
  overflow: auto;
  border-bottom: 1px solid #ccc;
  border-top: 2px solid #ccc;
  position: sticky;
  top: 0px;
  
  div{
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
  }
  
  img{
    width: 48px;
    margin-bottom: 5px;
    @media screen and (max-width: 1024px){
      width: 35px;
    }
  }
`



