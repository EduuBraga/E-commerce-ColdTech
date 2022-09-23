import styled from "styled-components";

export const Tittle = styled.div`
  text-align: center;
  margin: 35px 0px;
  h2{
    font-weight: 400;
    font-size: 38px;
  }
`

export const ContainerHelp = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  border-bottom: 1px solid black;
  box-sizing: content-box;
  position: sticky;
  top: 0px;
  background-color: white;

  a{
    color: black;
    text-decoration: none;
    font-weight: 500;

    &:active, &:focus{
      color: black;
    }
    &:hover{
      color: var(--color-secondary);
      background-color: #f3f4f6;
    }
  }

  a:nth-child(1){
    color: ${(props) => props.visibleContent === false ? 'var(--color-secondary)' : 'black'};
    border-bottom: ${(props) => props.visibleContent === false ? '2px solid var(--color-secondary)' : 'none'} ;
    font-size: 18px;
    padding: 25px 20px;
  }
  a:nth-child(2){
    color: ${(props) => props.visibleContent === true ? 'var(--color-secondary)' : 'black'};
    border-bottom: ${(props) => props.visibleContent === true ? '2px solid var(--color-secondary)' : 'none'} ;
    font-size: 18px;
    padding: 25px 20px;
  }
`

export const ContainerContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  scroll-behavior: smooth;

  h2{
    font-size: 36px;
    font-weight: 400;
    margin-top: 60px;
    margin-bottom: 10px;
  }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  div{
    width: 300px;
    margin-bottom: 15px;

    img{
      width: 40px;
      margin-bottom: 15px;
    }
  }

  h3{
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 15px;
  }

  p{
    margin-bottom: 15px;
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`