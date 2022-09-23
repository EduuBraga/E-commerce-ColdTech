import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content :space-around;
  align-items: center;
  padding: 17px 0px;
  background-color: white;


  div{
    img{
      width: 50px;
    }
    a{
      cursor: pointer;
    }
  }
`

export const NavBar = styled.nav`
    a:nth-child(1){
      border-bottom: ${(props)=> props.borderIsOn === 'home' ? '2px solid var(--color-secondary)' : 'none' };
      font-weight: ${(props)=> props.borderIsOn === 'home' ? '500' : '400' };
    }
    a:nth-child(2){
      border-bottom: ${(props)=> props.borderIsOn === 'shop' ? '2px solid var(--color-secondary)' : 'none' };
      font-weight: ${(props)=> props.borderIsOn === 'shop' ? '500' : '400' };
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
  
  div{
    display: flex;
    align-items: center;
    gap: 2px;
    padding-bottom: 5px;
    cursor: pointer;
    
    :hover{
      border-bottom: 2px solid var(--color-secondary);
      padding-bottom: 3px;
      font-weight: 500;
    }

    p{
      @media screen and (max-width: 768px){
        display: none;
      }
    }

    img{
      width: 25px;
      height: 25px;
    }
  }
`