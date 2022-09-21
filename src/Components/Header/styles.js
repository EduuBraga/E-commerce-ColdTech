import styled from 'styled-components'

export const Nav = styled.section`
  display: flex;
  justify-content :space-around;
  align-items: center;
  padding: 17px 0px;
  background-color: white;

  div{
    img{
      width: 45px;
    }
  }

  nav{
    a{
      margin-left: 20px;
      cursor: pointer;
      transition: all 0.2s;

      :hover{
        border-bottom: 2px solid var(--color-secondary);
        font-weight: 600;
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
    transition: border 0.2s;
    font-weight: 500;
    cursor: pointer;
    
    :hover{
      border-bottom: 2px solid var(--color-secondary);
      padding-bottom: 3px;
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

export const ContainerHeader = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;

  div{
    margin-right:10px ;

    img{
      width: 500px;

      @media screen and (max-width: 768px){
        width: 300px;
      }

      @media screen and (max-width: 425px){
        width: 20px;
      }
    }
  }
`

export const Description = styled.div`
  margin-left:10px ;

  h1{
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p{
    margin-bottom: 15px;
  }
`

