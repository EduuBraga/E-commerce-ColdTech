import styled from "styled-components"

export const Container = styled.div`
  background-color: #26262677;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50% 0px;

  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px; 
  width: 100%;
  height: 100%;
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
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`