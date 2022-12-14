import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media screen and (max-width: 490px){
    flex-direction: column;
    gap: 10px;
  }

  a{
    text-decoration: none;
    color: black;
    :active, :focus,:hover{
      color: black;
    }
  }
`

export const Tittle = styled.div`
  text-align: center;

  h2{
    font-weight: 500;
    font-size: 30px;
  }
  p{
    font-weight: 500;
    margin-top: 8px;
    font-size: 18px;
  }
`

export const Suportes = styled.div`
  display: flex;
  gap: 10px;
  text-align: left;
  margin: 20px 0px;
  border-bottom: 1px solid #666;
  
  @media screen and (max-width: 490px){
    margin: 10px 0px;
  }

  :nth-last-child(1){
    border: none;
  }

  & h3{
    color: var(--color-secondary);
    padding-bottom: 5px;
    cursor: pointer;
    transition: all 0.2s;

    :hover{
      color: #1153cF;
    }
  }

  & p{
    padding-bottom: 10px;
  }

  & img{
    width: 35px;
  }
`

