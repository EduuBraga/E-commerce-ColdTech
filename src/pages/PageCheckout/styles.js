import styled from "styled-components"

export const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;  
`

export const Nav = styled.div`
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

export const CartItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  background-color: #f3f5f6;
  border-radius: 10px;
`

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div:nth-child(2){
    text-align: left;

    h4{
      font-size: 15px;
      padding-bottom: 5px;
    }
    p{
      padding-bottom: 5px;
    }

    div{
      display: flex;
      gap: 10px;

      button{
        cursor: pointer;
        color: var(--color-secondary);
        font-weight: 600;
        font-size: 18px;
        border: none;
        background-color: #f3f4f6;
        padding: 2px 6px;
      }
    }
  }

  img{
    width:150px;
  }
`

export const WrapperRemoveItem = styled.div`
  align-self: center;

  img{
    width: 20px;
    cursor: pointer;
  }
`

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f3f4f6;
  border-radius: 10px;
  font-weight: 500;
  padding: 10px;

  span{
    font-weight: 600;
  }
`