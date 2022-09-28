import styled, {keyframes} from "styled-components"

const AnimationBlur = keyframes`
  0%{
    opacity: 0.1;
  }100%{
    opacity: 1;
  }
`

export const Container = styled.section`
  overflow: auto;
  height: 75vh;
`

export const CartItem = styled.div`
  animation: ${AnimationBlur} 0.8s ease;
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

export const ContainerTotal = styled.div`
  animation: ${AnimationBlur} 1s ease;
  background-color: #262626;
  position: absolute;
  bottom: 45px;
  text-align: left;
  font-weight: 500;
  margin-left: 20px;
  transform: translateY(-15px);
`

export const ContainerDeleteItem = styled.div`
  align-self: center;

  img{
    width: 20px;
    cursor: pointer;
  }
`