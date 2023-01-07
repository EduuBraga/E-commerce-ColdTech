import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: auto;
  gap: 5px;
  align-items: center;
  padding: 20px 10px;
  max-width: 1024px;
  margin: 0 auto;  
  
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