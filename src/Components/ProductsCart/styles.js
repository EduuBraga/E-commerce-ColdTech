import styled from "styled-components"

export const Container = styled.section`
  overflow: auto;
  height: 70vh;
`

export const CartItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
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
        background-color: #262626;
      }
    }
  }

  img{
    width:100px;
  }
`

export const WrapperTrash = styled.div`
  align-self: center;

  img{
    width: 20px;
    cursor: pointer;
  }
`