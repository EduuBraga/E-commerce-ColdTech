import styled from "styled-components";

export const ButtonGlobal = styled.button`
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    background-color: var(--color-secondary);
  }
`

export const ButtonGlobalNoBG = styled.button`
  border: 1px solid black;
  background-color: white;
  color: var(--color-secondary);
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    background-color: #f3f4f6;
  }
`