import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  text-align: center;

  * {
    padding-bottom: 13px;
  }
  h2{
    font-weight: 400;
    font-size: 30px;
  }

  p{
    font-weight: 600;
    font-size: 19px;
  }

  a{
    font-size: 18px;
    text-decoration: none;
    color: var(--color-secondary);
    transition: all 0.2s;

    &:hover, &:active, &:focus{
      color: #1153cF;
    }
  }

  & img{
    width: 400px;
  }
`