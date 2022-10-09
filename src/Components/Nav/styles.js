import styled from "styled-components"

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content :space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: #262626 ;
  color: white;
  font-size: 14px;
`

export const ContainerLogo = styled.div`
  margin-left: 25px;

  @media screen and (max-width: 425px){
    margin-left: 10px;
  }

  img{
    width: 50px;
  }
  a{
    display: flex;
    justify-content: center;
    gap: 0px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-secondary);
    font-weight: 600;

    span{
      transform: translateY(10px);
      
      @media screen and (max-width: 425px){
        display: none;
      }
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

    &:active{
      transform:scale(0.95);
    }

    span{
      :hover{
        text-decoration: none;
      }
    }
  }

  div:nth-child(1){
    display: ${({ displayIsOn }) => displayIsOn === false ? 'none' : 'flex'};
  }

  div:nth-child(2){
    @media screen and (max-width: 490px){
      display: none;
    }
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

export const FixedContactImg = styled.div`
  display: none;
  color: black;
  position: fixed;
  bottom: 15px;
  right: 15px;

  @media screen and (max-width: 490px){
    display: inline-block;
  }

  img{
    box-sizing: content-box;
    padding: 10px;
    border-radius: 5px;
    background-color: #262626;
    width: 26px;
  }
`