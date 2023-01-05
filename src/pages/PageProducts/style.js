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