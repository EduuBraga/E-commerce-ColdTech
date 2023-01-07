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
  
  a{
    color:black;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    :active, :focus{
      text-decoration: none;
      color: black;
    }

    :hover{
      text-decoration: underline;
    }
  }
`

export const ImgArrow = styled.img`
  width: 12px;
`

export const ImgHome = styled.img`
  width: 25px;
  transform: translateY(-2px);
`