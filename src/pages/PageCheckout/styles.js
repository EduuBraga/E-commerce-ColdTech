import styled from "styled-components";

export const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;  
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  margin: 16px 24px;
  padding: 16px 24px;
  background-color: #f2f2f2;
  border-radius: 12px;
  height: 160px;
`

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const WrapperImgProduct = styled.div`
  img{
    width:140px;
    filter: drop-shadow(3px 8px 6px #202020);

    @media screen and (max-width: 490px){
      width: 90px;
    }
  }
`

export const ContentProduct = styled.div`
  h4{
    font-size: 15px;
    padding-bottom: 12px;
  }
  p{
    padding-bottom: 4px;
  }
`

export const ContainerIncAndDecQty = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 150px;

  button{
    cursor: pointer;
    color: var(--color-secondary);
    border: none;
    font-weight: 700;
    font-size: 20px;
    background-color: #f2f2f2;
    padding: 2px 6px;

    &:active{
      transform:scale(0.90);
    }
  }
`

export const WrapperRemoveItem = styled.div`
  align-self: center;

  img{
    width: 26px;
    cursor: pointer;

    &:active{
      transform:scale(0.90);
    }
  }
`

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 10px 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  font-weight: 500;
  padding: 10px;
  margin: 16px 24px 50px 24px;

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