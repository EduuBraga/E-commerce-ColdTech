import styled from "styled-components";

export const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;  
`

export const CartItem = styled.div`
  margin: 10px 10px;
  padding: 0px 8px;
  display: flex;
  justify-content: space-between;
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

        &:active{
          transform:scale(0.90);
        }
      }
    }
  }

  img{
    width:150px;

    @media screen and (max-width: 490px){
      width: 100px;
    }
  }
`

export const WrapperRemoveItem = styled.div`
  align-self: center;

  img{
    width: 20px;
    cursor: pointer;

    &:active{
      transform:scale(0.90);
    }
  }
`

export const ContainerBottom = styled.div`
  margin: 10px 10px;
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

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    img{
      width: 25px;
    }
  }
`