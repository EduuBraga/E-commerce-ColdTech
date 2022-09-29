import styled from "styled-components";

export const Tittle = styled.div`
  text-align: center;
  margin: 15px 0px;

  h2{
    font-weight: 400;
    font-size: 38px;
  }

`

export const Breadcrumb = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  padding: 20px 10px;
  
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