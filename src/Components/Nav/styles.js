import styled from "styled-components"

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content :space-between;
  align-items: center;
  padding: 17px 0px;
  background-color: white;
  border-bottom: 1px solid #ccc;
`

export const Logo = styled.div`
  margin-left: 30px;
  img{
    width: 50px;
  }
  a{
    cursor: pointer;
  }
`

export const NavBar = styled.nav`
    a:nth-child(1){
      border-bottom: ${(props)=> props.borderIsOn === 'home' ? '2px solid var(--color-secondary)' : 'none' };
      font-weight: ${(props)=> props.borderIsOn === 'home' ? '500' : '400' };
    }
    a:nth-child(2){
      border-bottom: ${(props)=> props.borderIsOn === 'explorar' ? '2px solid var(--color-secondary)' : 'none' };
      font-weight: ${(props)=> props.borderIsOn === 'explorar' ? '500' : '400' };
    }
    a:nth-child(3){
      border-bottom: ${(props)=> props.borderIsOn === 'contact' ? '2px solid var(--color-secondary)' : 'none' };
      font-weight: ${(props)=> props.borderIsOn === 'contact' ? '500' : '400' };
    }

    a{
      margin-left: 20px;
      cursor: pointer;
      text-decoration: none;
      color: black;
      transition: font 2s ;

      &:active, &:focus{
        color: black;
      }

      :hover{
        border-bottom: 2px solid var(--color-secondary);
        font-weight: 500;
      }
    }
`

export const Services = styled.div`
  display: flex;
  gap: 15px;
  
  div:nth-child(1){
    gap: 5px;
  }

  div:nth-child(2){
    margin-right: 30px;
    cursor: pointer;

    :hover{
      border-bottom: 2px solid var(--color-secondary);
      font-weight: 600;
    }
  }

  div{
    display: flex;
    align-items: center;
    padding-bottom: 5px;

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
`