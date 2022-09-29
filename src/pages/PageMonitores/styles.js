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


export const CardMonitor = styled.div`
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

  p{
    font-weight: 500;
  }

  div{
    li{
      padding-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
    }
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