import styled from "styled-components";

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 30px;
  display: grid;
  grid-template: auto auto auto auto / auto auto auto;
  justify-content: center;
  gap: 50px;
`

export const Breadcrumb = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  padding: 20px 10px;
  
  img:nth-child(1){
    width: 25px;
    margin-right: 5px;
    transform: translateY(-2px);
  }

  img{
    width: 15px;
  }

  a{
    color:black;
    text-decoration: none;

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
  }
`


export const CardAccessories = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  gap: 15px;
  background-color: #f3f4f6;

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
`