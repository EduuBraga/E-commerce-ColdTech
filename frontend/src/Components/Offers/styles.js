import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  text-align: center;

  @media screen and (max-width: 490px){
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  & div{
    @media screen and (max-width: 490px){
      img{
        padding-bottom: 0px;
      }
    }
  }

  & div p:first-child{
    font-size: 16px;
    font-weight: 500;
  }

  * {
    padding-bottom: 13px;
  }
  h2{
    font-weight: 500;
    font-size: 30px;
  }

  p{
    font-weight: 500;
    font-size: 19px;
  }

  a{
    font-size: 18px;
    text-decoration: none;
    color: var(--color-secondary);
    transition: all 0.2s;

    &:hover, &:focus{
      color: #1153cF;
    }
    &:active{
      color: var(--color-secondary);
    }
  }

  & img{
    width: 400px;
    @media screen and (max-width: 768px){
        width: 250px;
    }
  }
`

export const ContainerReverse = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  text-align: center;

  @media screen and (max-width: 490px){
    flex-direction: column-reverse;
    gap: 10px;
    margin-bottom: 30px;
  }

  & div{
    @media screen and (max-width: 490px){
      img{
        padding-bottom: 0px;
      }
    }
  }

  & div p:first-child{
    font-size: 16px;
    font-weight: 500;
  }

  * {
    padding-bottom: 13px;
  }
  h2{
    font-weight: 500;
    font-size: 30px;
  }

  p{
    font-weight: 500;
    font-size: 19px;
  }

  a{
    font-size: 18px;
    text-decoration: none;
    color: var(--color-secondary);
    transition: all 0.2s;

    &:hover, &:focus{
      color: #1153cF;
    }
    &:active{
      color: var(--color-secondary);
    }
  }

  & img{
    width: 400px;
    @media screen and (max-width: 768px){
        width: 250px;
    }
    @media screen and (max-width: 490px){
        width: 200px;
    }

  }
`