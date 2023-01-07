import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin: 15px 0px;

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



  div{
    @media screen and (max-width: 768px){
      font-size: 15px;
    }
    @media screen and (max-width: 490px){
      font-size: 14px;
    }
  }

  a{
    text-decoration: none;
    font-weight: 500;

    &:active, &:focus,&:hover{
      color: black;
    }
  }

  a:nth-child(1){
    color: ${(props) => props.visibleContent === false ? 'var(--color-secondary)' : 'black'};
    border-bottom: ${(props) => props.visibleContent === false ? '2px solid var(--color-secondary)' : 'none'} ;
    font-size: 18px;
    padding: 25px 20px;

    @media screen and (max-width: 768px){
      text-align: center;
      padding: 5px 10px;
    }
    @media screen and (max-width: 490px){
      padding: 5px 10px;
    }

    :hover{
      color: var(--color-secondary);      
      background-color: #f3f4f6;
    }
  }

  a:nth-child(2){
    color: ${(props) => props.visibleContent === true ? 'var(--color-secondary)' : 'black'};
    border-bottom: ${(props) => props.visibleContent === true ? '2px solid var(--color-secondary)' : 'none'} ;
    font-size: 18px;
    padding: 25px 20px;

    @media screen and (max-width: 768px){
      text-align: center;
      padding: 5px 10px;
    }
    @media screen and (max-width: 490px){
      padding: 5px 10px;
    }

    :hover{
      color: var(--color-secondary);      
      background-color: #f3f4f6;
    }
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

    @media screen and (max-width: 768px){
      text-align: center;
    }
    @media screen and (max-width: 425px){
      font-size: 30px;
    }
  }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 10px;
  }

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
    margin: 0px 10px 15px 10px;

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