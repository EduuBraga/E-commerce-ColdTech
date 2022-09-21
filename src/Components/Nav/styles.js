import styled from "styled-components"

export const Container = styled.section`
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

  nav{
    a:first-child{
      border-bottom: 2px solid var(--color-secondary);
      font-weight: 500;
    }

    a{
      margin-left: 20px;
      cursor: pointer;

      :hover{
        border-bottom: 2px solid var(--color-secondary);
        font-weight: 500;
      }
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