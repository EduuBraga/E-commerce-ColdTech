import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`

export const Tittle = styled.div`
  text-align: center;

  h2{
    font-weight: 500;
    font-size: 30px;
  }
`

export const Suportes = styled.div`
  display: flex;
  gap: 10px;
  text-align: left;
  margin: 20px 0px;
  border-bottom: 1px solid #666;

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
    width: 45px;
  }
`

