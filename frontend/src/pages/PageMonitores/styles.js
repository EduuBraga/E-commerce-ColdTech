import styled from "styled-components";

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 30px;
  display: grid;
  grid-template: auto auto auto auto / auto auto auto;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 1024px){
    grid-template: auto  / auto auto ;
  }
  @media screen and (max-width: 767px){
    grid-template: auto / auto  ;
    gap: 20px;
  }
`

export const Breadcrumb = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  overflow: auto;
  padding: 20px 10px 20px 30px;

  @media screen and (max-width: 425px){
    padding: 20px 10px 20px 0px;
  }
  
  img:nth-child(1){
    width: 25px;
    margin-left: 15px;
    transform: translateY(-2px);

    @media screen and (max-width: 425px){
      width: 15px;
      transform: translateY(-2px);
    }
  }

  img{
    width: 15px;

    @media screen and (max-width: 425px){
      width: 10px;
    }
  }

  a{
    color:black;
    text-decoration: none;
    
    @media screen and (max-width: 425px){
      font-size: 14px;
    }

    :active, :focus{
      text-decoration: none;
      color: black;
    }

    :hover{
      text-decoration: underline;
    }
  }
  p{
    cursor: default;
    @media screen and (max-width: 425px){
      font-size: 14px;
    }
  }
`