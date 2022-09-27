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

export const CardCPU = styled.div`
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