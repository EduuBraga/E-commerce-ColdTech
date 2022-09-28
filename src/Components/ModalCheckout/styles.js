import styled from "styled-components"

export const Container = styled.div`
  background-color: #26262677;

  display: grid;
  place-items: center;
  
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;
`

export const CardModal = styled.div`
  background-color:white;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 0px 20px 3px black;
  border-radius: 10px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 7px 14px;
  }

  img{
    width: 24px;
  }
  a{
    text-decoration: none;
  }
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`