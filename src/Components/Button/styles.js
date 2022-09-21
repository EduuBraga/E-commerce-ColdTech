import styled from "styled-components";

export const ButtonGlobal = styled.button`
  border: 1px solid var(--color-main);
  border-radius: 5px;
  background-color: var(--color-secondary);
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    background-color: #1153cF;
  }
`