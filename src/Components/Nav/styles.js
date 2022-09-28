import styled from "styled-components"

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content :space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: #262626 ;
  color: white;
`

export const ContainerLogo = styled.div`
  margin-left: 25px;

  img{
    width: 50px;
  }
  a{
    display: flex;
    justify-content: center;
    gap: 1px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-secondary);
    font-weight: 600;

    span{
      transform: translateY(6px);
    }

    &:active, &:focus, &:hover{
      color: var(--color-secondary);
    }
  }
`

export const NavBar = styled.nav`
  display: flex;
  gap: 17px;
  margin-right: 20px;

  //Div do carrinho
  div:nth-last-child(1){
    cursor: pointer;

    span{
      :hover{
        text-decoration: none;
      }
    }
  }

  div:nth-child(1){
    display: ${({ displayIsOn }) => displayIsOn === false ? 'none' : 'flex'};
  }

  div{
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    gap: 6px;

    p{
      font-size: 14px;

      @media screen and (max-width: 768px){
        display: none;
      }
    }

    span{
      font-weight: 600;
      transition: all 0.2s;
      cursor: pointer;
      :hover{
        text-decoration: underline;
      }
    }

    img{
      width: 25px;
      height: 25px;
    }
  }

  a{
    display: flex;
    justify-content: center;
    gap: 6px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: white;

    &:active, &:focus{
      color: white;
    }
    &:hover{
      text-decoration: underline;
    }
  }
`